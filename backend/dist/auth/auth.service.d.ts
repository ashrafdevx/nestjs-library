import { JwtService } from '@nestjs/jwt';
import { AuthorService } from "../author/author.service";
import { LoginDto } from './dto/login.dto';
import { RegisterAuthorDto } from './dto/register-author.dto';
export declare class AuthService {
    private readonly authorService;
    private readonly jwtService;
    constructor(authorService: AuthorService, jwtService: JwtService);
    register(registerAuthorDto: RegisterAuthorDto): Promise<{
        access_token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    private createToken;
}
