import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto, req: any, coverImage: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("./schema/book.entity").Book, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/book.entity").Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(title?: string, categoryId?: string, page?: number, limit?: number): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schema/book.entity").Book, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/book.entity").Book & {
            _id: import("mongoose").Types.ObjectId;
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
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/book.entity").Book, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/book.entity").Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, updateBookDto: UpdateBookDto, coverImage: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("./schema/book.entity").Book, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/book.entity").Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/book.entity").Book, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/book.entity").Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    findByCategory(categoryId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/book.entity").Book, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/book.entity").Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
