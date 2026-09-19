import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schema/book.entity';
import { Model, Types } from 'mongoose';
import { CloudinaryService } from "../cloudinary/cloudinary.service";
export declare class BookService {
    private readonly bookModel;
    private cloudinary;
    constructor(bookModel: Model<Book>, cloudinary: CloudinaryService);
    create(userId: string, createBookDto: CreateBookDto, coverImage: any): Promise<import("mongoose").Document<unknown, {}, Book, {}, import("mongoose").DefaultSchemaOptions> & Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(title: string, categoryId: string, page?: number, limit?: number): Promise<{
        data: (import("mongoose").Document<unknown, {}, Book, {}, import("mongoose").DefaultSchemaOptions> & Book & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Book, {}, import("mongoose").DefaultSchemaOptions> & Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: any, updateBookDto: UpdateBookDto, coverImage?: any): Promise<import("mongoose").Document<unknown, {}, Book, {}, import("mongoose").DefaultSchemaOptions> & Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: number): Promise<(import("mongoose").Document<unknown, {}, Book, {}, import("mongoose").DefaultSchemaOptions> & Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    findByCategory(categoryId: string): Promise<(import("mongoose").Document<unknown, {}, Book, {}, import("mongoose").DefaultSchemaOptions> & Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    private uploadImageToCloudinary;
}
