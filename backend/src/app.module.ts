import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule, InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './book/book.module';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    CloudinaryModule,
    AuthModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/booking-management'),
    BookModule,
    CategoryModule,
    ReviewModule,
    CloudinaryModule,
  ],

  controllers: [AppController],
  providers: [AppService, CloudinaryService],
})
export class AppModule implements OnModuleInit {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  onModuleInit() {
    this.connection.once('connected', () => {
      console.log('✅ MongoDB connected successfully!');
    });

    this.connection.on('error', (error) => {
      console.error('❌ MongoDB connection error:', error);
    });

    this.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected!');
    });
  }
}
