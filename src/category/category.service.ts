import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryUpdateDto } from './dto/category-update.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<CategoryDto>,
  ) {}

  async createCategory(categoryDto: CategoryDto) {
    // Logic to create a category
    try {
      const newCategory = new this.categoryModel(categoryDto);
      return await newCategory.save();
    } catch (error) {
      return { message: 'Error creating category', error };
    }
  }

  async allCategories() {
    // Logic to get all categories
    try {
      return await this.categoryModel.find().exec();
    } catch (error) {
      return { message: 'Error fetching categories', error };
    }
  }

  async updateCategory(id: string, categoryDto: CategoryDto) {
    // Logic to update a category
    try {
      return await this.categoryModel
        .findByIdAndUpdate(id, categoryDto, { new: true })
        .exec();
    } catch (error) {
      return { message: 'Error updating category', error };
    }
  }

  async deleteCategory(id: string) {
    // Logic to delete a category
    try {
      return await this.categoryModel.findByIdAndDelete(id).exec();
    } catch (error) {
      return { message: 'Error deleting category', error };
    }
  }

  async upsertCateogry(id: string, categoryUpdateDto: CategoryUpdateDto) {
    try {
      const updatedCategory = await this.categoryModel
        .findByIdAndUpdate(id, categoryUpdateDto, { new: true, upsert: true })
        .exec();
      return updatedCategory;
    } catch (error) {
      return { message: 'Error upserting category', error };
    }
  }
}
