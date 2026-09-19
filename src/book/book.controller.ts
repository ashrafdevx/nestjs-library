import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Multer } from 'multer';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('coverImage'))
  create(
    @Body() createBookDto: CreateBookDto,
    @Request() req,
    @UploadedFile() coverImage: Express.Multer.File,
  ) {
    return this.bookService.create(req.user.sub, createBookDto, coverImage);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(
    @Query(`title`) title?: string,
    @Query(`categoryId`) categoryId?: string,
    @Query(`page`) page?: number,
    @Query(`limit`) limit?: number,
  ) {
    return this.bookService.findAll(title ?? '', categoryId ?? '', page, limit);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @UseInterceptors(FileInterceptor('coverImage'))
  update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
    @UploadedFile() coverImage: Express.Multer.File,
  ) {
    return this.bookService.update(id, updateBookDto, coverImage);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }

  @Get('categoryId')
  async findByCategory(@Query('categoryId') categoryId: string) {
    return this.bookService.findByCategory(categoryId);
  }
}
