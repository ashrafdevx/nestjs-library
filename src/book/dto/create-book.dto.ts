import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  isbn: string;

  // @IsString()
  // coverImage: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  categoryId: string;
}
