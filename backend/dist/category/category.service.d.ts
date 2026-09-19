import { CategoryDto } from './dto/category.dto';
import { Model } from 'mongoose';
import { CategoryUpdateDto } from './dto/category-update.dto';
export declare class CategoryService {
    private readonly categoryModel;
    constructor(categoryModel: Model<CategoryDto>);
    createCategory(categoryDto: CategoryDto): Promise<(import("mongoose").Document<unknown, {}, CategoryDto, {}, import("mongoose").DefaultSchemaOptions> & CategoryDto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | {
        message: string;
        error: any;
    }>;
    allCategories(): Promise<(import("mongoose").Document<unknown, {}, CategoryDto, {}, import("mongoose").DefaultSchemaOptions> & CategoryDto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[] | {
        message: string;
        error: any;
    }>;
    updateCategory(id: string, categoryDto: CategoryDto): Promise<(import("mongoose").Document<unknown, {}, CategoryDto, {}, import("mongoose").DefaultSchemaOptions> & CategoryDto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | {
        message: string;
        error: any;
    } | null>;
    deleteCategory(id: string): Promise<(import("mongoose").Document<unknown, {}, CategoryDto, {}, import("mongoose").DefaultSchemaOptions> & CategoryDto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | {
        message: string;
        error: any;
    } | null>;
    upsertCateogry(id: string, categoryUpdateDto: CategoryUpdateDto): Promise<(import("mongoose").Document<unknown, {}, CategoryDto, {}, import("mongoose").DefaultSchemaOptions> & CategoryDto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | {
        message: string;
        error: any;
    }>;
}
