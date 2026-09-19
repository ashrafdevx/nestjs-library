"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const jwt_1 = require("@nestjs/jwt");
const author_service_1 = require("../author/author.service");
let AuthService = class AuthService {
    authorService;
    jwtService;
    constructor(authorService, jwtService) {
        this.authorService = authorService;
        this.jwtService = jwtService;
    }
    async register(registerAuthorDto) {
        const existingAuthor = await this.authorService.findByEmail(registerAuthorDto.email);
        if (existingAuthor) {
            throw new common_1.ConflictException('Author already exists');
        }
        const passwordHash = await bcrypt.hash(registerAuthorDto.password, 10);
        const author = await this.authorService.create({
            name: registerAuthorDto.name,
            email: registerAuthorDto.email,
            book: registerAuthorDto.book,
            password: passwordHash,
        });
        return this.createToken(author.id, author.name);
    }
    async login(loginDto) {
        const author = await this.authorService.findByEmail(loginDto.email, true);
        if (!author ||
            !(await bcrypt.compare(loginDto.password, author.password))) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return this.createToken(author.id, author.name);
    }
    async createToken(id, name) {
        const accessToken = await this.jwtService.signAsync({
            sub: id,
            username: name,
        });
        return { access_token: accessToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [author_service_1.AuthorService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map