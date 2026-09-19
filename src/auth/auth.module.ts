import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthorModule } from 'src/author/author.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthorModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'development-secret',
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
