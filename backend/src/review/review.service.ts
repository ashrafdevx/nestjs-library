import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from './schema/review.schema';
import { Model } from 'mongoose';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(
    bookId: string,
    createReviewDto: CreateReviewDto,
    userId: string,
  ) {
    const existingReview = await this.reviewModel.findOne({
      bookId,
      userId,
    });

    if (existingReview) {
      throw new ConflictException('You have already reviewed this book');
    }

    const review = await this.reviewModel.create({
      bookId,
      userId,
      rating: createReviewDto.rating,
      comment: createReviewDto.comment,
    });

    return {
      message: 'Review created successfully',
      review,
    };
  }

  async findAll() {
    return this.reviewModel.find().exec();
  }

  async findOne(id: string) {
    if (!id) {
      throw new BadRequestException('Review ID is required');
    }

    const review = await this.reviewModel.findById(id).exec();

    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }

    return review;
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    if (!id) {
      throw new BadRequestException('Review ID is required');
    }

    const updatedReview = await this.reviewModel
      .findByIdAndUpdate(id, updateReviewDto, { new: true })
      .exec();

    if (!updatedReview) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }

    return {
      message: 'Review updated successfully',
      review: updatedReview,
    };
  }

  async remove(id: string) {
    if (!id) {
      throw new BadRequestException('Review ID is required');
    }

    const deletedReview = await this.reviewModel.findByIdAndDelete(id).exec();

    if (!deletedReview) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }

    return {
      message: 'Review deleted successfully',
      review: deletedReview,
    };
  }
}
