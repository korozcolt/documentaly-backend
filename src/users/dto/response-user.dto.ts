import { CreateUserDto } from './create-user.dto';
import { IntersectionType } from '@nestjs/swagger';

export class UserIdResponseDto {
  id: string;
}

export class UserResponseDto extends IntersectionType(
  CreateUserDto,
  UserIdResponseDto,
) {}
