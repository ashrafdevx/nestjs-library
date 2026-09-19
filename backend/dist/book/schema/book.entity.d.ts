import { HydratedDocument, Types } from 'mongoose';
export type BookDocument = HydratedDocument<Book>;
export declare class Book {
    categoryId: Types.ObjectId;
    userId: string;
    isbn: string;
    coverImage: string;
    title: string;
    author: string;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, any, any, Book>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, import("mongoose").Document<unknown, {}, Book, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    categoryId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    userId?: import("mongoose").SchemaDefinitionProperty<string, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    isbn?: import("mongoose").SchemaDefinitionProperty<string, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    coverImage?: import("mongoose").SchemaDefinitionProperty<string, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    author?: import("mongoose").SchemaDefinitionProperty<string, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Book>;
