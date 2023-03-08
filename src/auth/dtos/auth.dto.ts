import { IsEmail, IsNotEmpty } from 'class-validator';

import { UserResponseDto } from '../../users/dto/response-user.dto';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class LoginResponseDto {
  token: string;
  user: UserResponseDto;
}

export class LogoutResponseDto {
  success: boolean;
}
