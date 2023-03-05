import * as bcrypt from 'bcryptjs';

import { UserIdResponseDto, UserResponseDto } from '../dto/response-user.dto';

import { CreateUserDto } from '../dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../model/user.model';
import { UsersDao } from '../daos/users.dao';

@Injectable()
export class UsersService {
  constructor(private readonly usersDao: UsersDao) {}

  async create(createUserDto: CreateUserDto): Promise<UserIdResponseDto> {
    try {
      let { email } = createUserDto;
      email = email.toLowerCase();
      createUserDto.email = email;
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      createUserDto.password = hashedPassword;
      const user = await this.usersDao.create(createUserDto);
      return { id: user.id };
    } catch (err) {
      throw err;
    }
  }

  async findAll(): Promise<UserResponseDto[]> {
    try {
      return this.usersDao.findAll();
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: string): Promise<UserResponseDto> {
    try {
      return this.usersDao.findByPk(id);
    } catch (err) {
      throw err;
    }
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    try {
      await this.usersDao.update(id, updateUserDto);
      return this.usersDao.findByPk(id);
    } catch (err) {
      throw err;
    }
  }

  async remove(id: string): Promise<UserResponseDto> {
    //using delete in the users.dao.ts
    try {
      const user = await this.usersDao.findByPk(id);
      await this.usersDao.delete(id);
      return user;
    } catch (err) {
      throw err;
    }
  }

  async inactivate(ids: string[], transaction: any = null): Promise<void> {
    try {
      await this.usersDao.inactivate(ids, transaction);
    } catch (err) {
      throw err;
    }
  }
}
