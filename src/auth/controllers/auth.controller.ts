import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../../utils/guards/jwt-auth.guard';
import { AuthService } from '../services/auth.service';
import {
  LoginDto,
  LoginResponseDto,
  LogoutResponseDto,
} from '../dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req: Request): Promise<LogoutResponseDto> {
    const userId = req.user['id'];
    return this.authService.logout(userId);
  }

  @Get('check-login')
  @UseGuards(JwtAuthGuard)
  async checkLogin(@Req() req: Request): Promise<boolean> {
    return true;
  }
}
