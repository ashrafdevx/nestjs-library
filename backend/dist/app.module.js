"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const book_module_1 = require("./book/book.module");
const category_module_1 = require("./category/category.module");
const review_module_1 = require("./review/review.module");
const cloudinary_service_1 = require("./cloudinary/cloudinary.service");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
let AppModule = class AppModule {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    onModuleInit() {
        this.connection.once('connected', () => {
            console.log('✅ MongoDB connected successfully!');
        });
        this.connection.on('error', (error) => {
            console.error('❌ MongoDB connection error:', error);
        });
        this.connection.on('disconnected', () => {
            console.log('⚠️ MongoDB disconnected!');
        });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cloudinary_module_1.CloudinaryModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                ignoreEnvFile: true,
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/booking-management'),
            book_module_1.BookModule,
            category_module_1.CategoryModule,
            review_module_1.ReviewModule,
            cloudinary_module_1.CloudinaryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, cloudinary_service_1.CloudinaryService],
    }),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Connection])
], AppModule);
//# sourceMappingURL=app.module.js.map