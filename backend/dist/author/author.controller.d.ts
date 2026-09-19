import { AuthorService } from './author.service';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    getAllAuthors(): Promise<import("./schema/author.schema").Author[]>;
    getAuthorByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schema/author.schema").Author, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/author.schema").Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./schema/author.schema").Author, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/author.schema").Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
    getAuthorById(id: string): Promise<import("./schema/author.schema").Author>;
}
