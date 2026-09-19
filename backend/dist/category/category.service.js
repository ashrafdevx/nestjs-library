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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CategoryService = class CategoryService {
    categoryModel;
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async createCategory(categoryDto) {
        try {
            const newCategory = new this.categoryModel(categoryDto);
            return await newCategory.save();
        }
        catch (error) {
            return { message: 'Error creating category', error };
        }
    }
    async allCategories() {
        try {
            return await this.categoryModel.find().exec();
        }
        catch (error) {
            return { message: 'Error fetching categories', error };
        }
    }
    async updateCategory(id, categoryDto) {
        try {
            return await this.categoryModel
                .findByIdAndUpdate(id, categoryDto, { new: true })
                .exec();
        }
        catch (error) {
            return { message: 'Error updating category', error };
        }
    }
    async deleteCategory(id) {
        try {
            return await this.categoryModel.findByIdAndDelete(id).exec();
        }
        catch (error) {
            return { message: 'Error deleting category', error };
        }
    }
    async upsertCateogry(id, categoryUpdateDto) {
        try {
            const updatedCategory = await this.categoryModel
                .findByIdAndUpdate(id, categoryUpdateDto, { new: true, upsert: true })
                .exec();
            return updatedCategory;
        }
        catch (error) {
            return { message: 'Error upserting category', error };
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Category')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
//# sourceMappingURL=category.service.js.map