import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @UseGuards(AuthGuard)
  @Get()
  getAllAuthors() {
    return this.authorService.getAllAuthors();
  }

  @Get('email/:email')
  getAuthorByEmail(@Param('email') email: string) {
    return this.authorService.findByEmail(email);
  }

  @Get(':id')
  getAuthorById(@Param('id') id: string) {
    return this.authorService.findById(id);
  }
}
