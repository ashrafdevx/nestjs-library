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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("./schema/book.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let BookService = class BookService {
    bookModel;
    cloudinary;
    constructor(bookModel, cloudinary) {
        this.bookModel = bookModel;
        this.cloudinary = cloudinary;
    }
    async create(userId, createBookDto, coverImage) {
        try {
            let coverImageUrl = '';
            if (coverImage) {
                const cloudinarySaveImage = await this.uploadImageToCloudinary(coverImage);
                coverImageUrl = cloudinarySaveImage?.secure_url ?? '';
            }
            const book = await this.bookModel.create({
                ...createBookDto,
                coverImage: coverImageUrl,
                userId,
            });
            return book;
        }
        catch (error) {
            console.error('Book create error:', error);
            throw new common_1.BadRequestException('Unable to create book');
        }
    }
    async findAll(title, categoryId, page = 1, limit = 10) {
        try {
            const skip = (page - 1) * limit;
            const filter = {};
            if (title) {
                filter.title = { $regex: title, $options: 'i' };
            }
            if (categoryId) {
                if (!mongoose_2.Types.ObjectId.isValid(categoryId)) {
                    throw new common_1.BadRequestException('Invalid categoryId');
                }
                filter.categoryId = new mongoose_2.Types.ObjectId(categoryId);
            }
            const [books, total] = await Promise.all([
                this.bookModel.find(filter).skip(skip).limit(limit),
                this.bookModel.countDocuments(filter),
            ]);
            return {
                data: books,
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException)
                throw error;
            throw new common_1.BadRequestException('Unable to list books');
        }
    }
    async findOne(id) {
        try {
            if (!id) {
                throw new common_1.BadRequestException('Invalid book ID');
            }
            const book = await this.bookModel.findById(id).exec();
            if (!book) {
                throw new common_1.NotFoundException(`Book with ID ${id} not found`);
            }
            return book;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Unable to find book');
        }
    }
    async update(id, updateBookDto, coverImage) {
        try {
            const updateBookData = { ...updateBookDto };
            if (coverImage) {
                const cloudinarySaveImage = await this.uploadImageToCloudinary(coverImage);
                updateBookData.coverImage = cloudinarySaveImage?.secure_url ?? '';
            }
            const updatedBook = await this.bookModel
                .findByIdAndUpdate(id, updateBookData, { new: true })
                .exec();
            if (!updatedBook) {
                throw new common_1.NotFoundException(`Book with ID ${id} not found`);
            }
            return updatedBook;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Unable to update book');
        }
    }
    remove(id) {
        try {
            const deletedBook = this.bookModel.findByIdAndDelete(id).exec();
            if (!deletedBook) {
                throw new common_1.NotFoundException(`Book with ID ${id} not found`);
            }
            return deletedBook;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Unable to delete book');
        }
    }
    async findByCategory(categoryId) {
        return this.bookModel.find({ categoryId });
    }
    async uploadImageToCloudinary(file) {
        if (!file || !file.buffer) {
            throw new common_1.BadRequestException('No file uploaded.');
        }
        const allowedMimeTypes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/webp',
            'image/gif',
        ];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException('Invalid file type.');
        }
        return await this.cloudinary.uploadImage(file).catch((error) => {
            throw new common_1.BadRequestException('Invalid file type.');
        });
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(book_entity_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cloudinary_service_1.CloudinaryService])
], BookService);
//# sourceMappingURL=book.service.js.map