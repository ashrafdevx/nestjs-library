import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review, ReviewDocument } from './schema/review.schema';
import { Model } from 'mongoose';
export declare class ReviewService {
    private readonly reviewModel;
    constructor(reviewModel: Model<ReviewDocument>);
    create(bookId: string, createReviewDto: CreateReviewDto, userId: string): Promise<{
        message: string;
        review: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
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
        review: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
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
        review: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Review, {}, import("mongoose").DefaultSchemaOptions> & Review & {
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
