import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema({ timestamps: true })
export class Book {
  @Prop({ type: Types.ObjectId, ref: 'Category', required: false })
  categoryId: Types.ObjectId;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, trim: true })
  isbn: string;

  @Prop({ required: true })
  coverImage: string;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, trim: true })
  author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
