import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { UserRole } from '../enums/user-role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsEmail()
  secondary_email?: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  avatar_url?: string;

  avatar_key?: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
