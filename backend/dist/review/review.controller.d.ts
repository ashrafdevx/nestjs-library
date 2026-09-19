import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(bookId: string, createReviewDto: CreateReviewDto, req: any): Promise<{
        message: string;
        review: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<{
        message: string;
        review: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    remove(id: string): Promise<{
        message: string;
        review: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./schema/review.schema").Review, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/review.schema").Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
}
