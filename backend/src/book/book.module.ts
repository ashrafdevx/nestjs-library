import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from 'node_modules/@nestjs/mongoose/dist/mongoose.module';
import { Book, BookSchema } from './schema/book.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtModule } from 'node_modules/@nestjs/jwt/dist/jwt.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    CloudinaryModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'development-secret',
    }),
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService, AuthGuard],
})
export class BookModule {}
