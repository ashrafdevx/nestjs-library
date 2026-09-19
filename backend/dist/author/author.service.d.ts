import { Model } from 'mongoose';
import { Author, AuthorDocument } from './schema/author.schema';
export interface CreateAuthorData {
    name: string;
    email: string;
    book: string;
    password: string;
}
export declare class AuthorService {
    private readonly authorModel;
    constructor(authorModel: Model<AuthorDocument>);
    create(createAuthorData: CreateAuthorData): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Author, {}, import("mongoose").DefaultSchemaOptions> & Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Author, {}, import("mongoose").DefaultSchemaOptions> & Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getAllAuthors(): Promise<Author[]>;
    findByEmail(email: string, includePassword?: boolean): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Author, {}, import("mongoose").DefaultSchemaOptions> & Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Author, {}, import("mongoose").DefaultSchemaOptions> & Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
    findById(id: string): Promise<Author>;
}
