import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterAuthorDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  book: string;

  @IsString()
  @MinLength(6)
  password: string;
}