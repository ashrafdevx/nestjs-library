import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { CategoryUpdateDto } from './dto/category-update.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AuthGuard)
  @Post()
  createCategory(@Body() categoryDto: CategoryDto) {
    return this.categoryService.createCategory(categoryDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  allCategories() {
    return this.categoryService.allCategories();
  }

  @Patch(`:id`)
  updateCategory(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    return this.categoryService.updateCategory(id, categoryDto);
  }

  @Delete(`:id`)
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }

  @Patch(`upsert/:id`)
  upsertCategory(
    @Param('id') id: string,
    @Body() categoryUpdateDto: CategoryUpdateDto,
  ) {
    return this.categoryService.upsertCateogry(id, categoryUpdateDto);
  }
}
