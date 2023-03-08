import * as bcrypt from 'bcryptjs';

import {
  LoginDto,
  LoginResponseDto,
  LogoutResponseDto,
} from '../dtos/auth.dto';

import { AuthDao } from '../daos/auth.dao';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../users/model/user.model';
import { UsersDao } from '../../users/daos/users.dao';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersDao: UsersDao,
    private readonly authDao: AuthDao,
  ) {}

  async validateUser(email: string, password: string): Promise<Partial<User>> {
    const user = await this.usersDao.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(
      loginDto.email.toLowerCase(),
      loginDto.password,
    ); 
    if (!user) {
      await this.authDao.create({ email: loginDto.email });
      throw new Error('Invalid credentials');
    }

    const token = this.jwtService.sign({ id: user.id });
    await this.authDao.create({ userId: user.id, successful: true });

    return {
      token,
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };
  }

  async logout(userId: string): Promise<LogoutResponseDto> {
    await this.authDao.logout(userId);
    return { success: true };
  }

  async getLoginAttempts(userId: string): Promise<number> {
    return this.authDao.countAttempts(userId);
  }
}
