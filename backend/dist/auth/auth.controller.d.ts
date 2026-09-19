import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterAuthorDto } from './dto/register-author.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerAuthorDto: RegisterAuthorDto): Promise<{
        access_token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
