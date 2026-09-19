import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthorService } from 'src/author/author.service';
import { LoginDto } from './dto/login.dto';
import { RegisterAuthorDto } from './dto/register-author.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly authorService: AuthorService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerAuthorDto: RegisterAuthorDto) {
    const existingAuthor = await this.authorService.findByEmail(
      registerAuthorDto.email,
    );

    if (existingAuthor) {
      throw new ConflictException('Author already exists');
    }

    const passwordHash = await bcrypt.hash(registerAuthorDto.password, 10);
    const author = await this.authorService.create({
      name: registerAuthorDto.name,
      email: registerAuthorDto.email,
      book: registerAuthorDto.book,
      password: passwordHash,
    });

    return this.createToken(author.id, author.name);
  }

  async login(loginDto: LoginDto) {
    const author = await this.authorService.findByEmail(loginDto.email, true);

    if (
      !author ||
      !(await bcrypt.compare(loginDto.password, author.password))
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.createToken(author.id, author.name);
  }

  private async createToken(id: string, name: string) {
    const accessToken = await this.jwtService.signAsync({
      sub: id,
      username: name,
    });

    return { access_token: accessToken };
  }
}
