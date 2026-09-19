import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schema/book.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private readonly bookModel: Model<Book>,
    private cloudinary: CloudinaryService,
  ) {}

  async create(userId: string, createBookDto: CreateBookDto, coverImage: any) {
    try {
      let coverImageUrl = '';

      if (coverImage) {
        const cloudinarySaveImage =
          await this.uploadImageToCloudinary(coverImage);
        coverImageUrl = cloudinarySaveImage?.secure_url ?? '';
      }

      const book = await this.bookModel.create({
        ...createBookDto,
        coverImage: coverImageUrl,
        userId,
      });

      return book;
    } catch (error) {
      console.error('Book create error:', error);

      throw new BadRequestException('Unable to create book');
    }
  }

  async findAll(
    title: string,
    categoryId: string,
    page: number = 1,
    limit: number = 10,
  ) {
    try {
      const skip = (page - 1) * limit;

      const filter: any = {};

      if (title) {
        // case-insensitive partial match
        filter.title = { $regex: title, $options: 'i' };
      }

      if (categoryId) {
        if (!Types.ObjectId.isValid(categoryId)) {
          throw new BadRequestException('Invalid categoryId');
        }
        filter.categoryId = new Types.ObjectId(categoryId);
      }

      const [books, total] = await Promise.all([
        this.bookModel.find(filter).skip(skip).limit(limit),
        this.bookModel.countDocuments(filter),
      ]);

      return {
        data: books,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new BadRequestException('Unable to list books');
    }
  }

  async findOne(id: string) {
    try {
      if (!id) {
        throw new BadRequestException('Invalid book ID');
      }

      const book = await this.bookModel.findById(id).exec();
      if (!book) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }

      return book;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new BadRequestException('Unable to find book');
    }
  }

  async update(id: any, updateBookDto: UpdateBookDto, coverImage?: any) {
    try {
      const updateBookData: any = { ...updateBookDto };

      if (coverImage) {
        const cloudinarySaveImage =
          await this.uploadImageToCloudinary(coverImage);
        updateBookData.coverImage = cloudinarySaveImage?.secure_url ?? '';
      }

      const updatedBook = await this.bookModel
        .findByIdAndUpdate(id, updateBookData, { new: true })
        .exec();

      if (!updatedBook) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }

      return updatedBook;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Unable to update book');
    }
  }

  remove(id: number) {
    try {
      const deletedBook = this.bookModel.findByIdAndDelete(id).exec();
      if (!deletedBook) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
      return deletedBook;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Unable to delete book');
    }
  }

  // Book by category
  async findByCategory(categoryId: string) {
    return this.bookModel.find({ categoryId });
  }

  private async uploadImageToCloudinary(file: Express.Multer.File) {
    if (!file || !file.buffer) {
      throw new BadRequestException('No file uploaded.');
    }

    const allowedMimeTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/gif',
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException('Invalid file type.');
    }

    return await this.cloudinary.uploadImage(file).catch((error) => {
      throw new BadRequestException('Invalid file type.');
    });
  }
}
