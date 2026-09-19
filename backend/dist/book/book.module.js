"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const book_controller_1 = require("./book.controller");
const mongoose_module_1 = require("../../node_modules/@nestjs/mongoose/dist/mongoose.module");
const book_entity_1 = require("./schema/book.entity");
const auth_guard_1 = require("../auth/auth.guard");
const jwt_module_1 = require("../../node_modules/@nestjs/jwt/dist/jwt.module");
const cloudinary_module_1 = require("../cloudinary/cloudinary.module");
let BookModule = class BookModule {
};
exports.BookModule = BookModule;
exports.BookModule = BookModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cloudinary_module_1.CloudinaryModule,
            jwt_module_1.JwtModule.register({
                secret: process.env.JWT_SECRET ?? 'development-secret',
            }),
            mongoose_module_1.MongooseModule.forFeature([
                {
                    name: book_entity_1.Book.name,
                    schema: book_entity_1.BookSchema,
                },
            ]),
        ],
        controllers: [book_controller_1.BookController],
        providers: [book_service_1.BookService, auth_guard_1.AuthGuard],
    })
], BookModule);
//# sourceMappingURL=book.module.js.map