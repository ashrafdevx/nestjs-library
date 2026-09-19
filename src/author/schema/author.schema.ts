import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthorDocument = HydratedDocument<Author>;

@Schema({ timestamps: true })
export class Author {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  book: string;

  @Prop({ select: false })
  password: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
