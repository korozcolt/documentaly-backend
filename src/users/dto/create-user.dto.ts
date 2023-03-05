import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { IntersectionType } from '@nestjs/swagger';
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
  @IsOptional()
  secondary_email?: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  role: string;
}

class AdditionalUserInformation {
  @IsOptional()
  avatar_url?: string;

  @IsOptional()
  avatar_key?: string;
}

export class CreateUserDBDto extends IntersectionType(
  CreateUserDto,
  AdditionalUserInformation,
) {}
