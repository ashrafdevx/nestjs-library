import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from './schema/author.schema';

export interface CreateAuthorData {
  name: string;
  email: string;
  book: string;
  password: string;
}

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name)
    private readonly authorModel: Model<AuthorDocument>,
  ) {}

  async create(createAuthorData: CreateAuthorData) {
    return new this.authorModel(createAuthorData).save();
  }

  async getAllAuthors(): Promise<Author[]> {
    return this.authorModel.find().select('-password').exec();
  }

  async findByEmail(email: string, includePassword = false) {
    const query = this.authorModel.findOne({ email });
    if (includePassword) {
      query.select('+password');
    }

    return query.exec();
  }

  async findById(id: string): Promise<Author> {
    const author = await this.authorModel
      .findById(id)
      .select('-password')
      .exec();
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }

    return author;
  }
}
