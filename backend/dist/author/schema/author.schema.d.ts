import { HydratedDocument } from 'mongoose';
export type AuthorDocument = HydratedDocument<Author>;
export declare class Author {
    name: string;
    email: string;
    book: string;
    password: string;
}
export declare const AuthorSchema: import("mongoose").Schema<Author, import("mongoose").Model<Author, any, any, any, any, any, Author>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Author, import("mongoose").Document<unknown, {}, Author, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Author & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Author, import("mongoose").Document<unknown, {}, Author, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Author, import("mongoose").Document<unknown, {}, Author, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    book?: import("mongoose").SchemaDefinitionProperty<string, Author, import("mongoose").Document<unknown, {}, Author, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    password?: import("mongoose").SchemaDefinitionProperty<string, Author, import("mongoose").Document<unknown, {}, Author, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Author>;
