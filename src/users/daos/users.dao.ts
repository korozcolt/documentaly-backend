import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { ErrorException } from 'src/utils/exception-filter/error-response.exception';
import { CreateUserDBDto } from '../dto/create-user.dto';
import { UserResponseDto } from '../dto/response-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../model/user.model';

@Injectable()
export class UsersDao {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  create(dto: CreateUserDBDto): Promise<UserResponseDto> {
    try {
      return this.userModel.create({ ...dto });
    } catch (err) {
      const { code, error } = err;
      throw new ErrorException(code, error, [err?.message]);
    }
  }

  findByPk(id: string): Promise<UserResponseDto> {
    try {
      return this.userModel.findOne({ where: { id }, plain: true });
    } catch (err) {
      const { code, error } = err;
      throw new ErrorException(code, error, [err?.message]);
    }
  }

  findAll(): Promise<UserResponseDto[]> {
    try {
      return this.userModel.findAll({ plain: true });
    } catch (err) {
      const { code, error } = err;
      throw new ErrorException(code, error, [err?.message]);
    }
  }

  findByEmail(email: string): Promise<UserResponseDto> {
    try {
      return this.userModel.findOne({ where: { email }, plain: true });
    } catch (err) {
      const { code, error } = err;
      throw new ErrorException(code, error, [err?.message]);
    }
  }

  update(id: string, columns: UpdateUserDto) {
    try {
      return this.userModel.update(columns, { where: { id } });
    } catch (err) {
      const { code, error } = err;
      throw new ErrorException(code, error, [err?.message]);
    }
  }

  inactivate(ids: string[], transaction: any = null) {
    try {
      return this.userModel.update(
        { active: false },
        { where: { id: { [Op.in]: ids } }, transaction },
      );
    } catch (err) {
      const { code, error } = err;
      throw new ErrorException(code, error, [err?.message]);
    }
  }

  async delete(id: string): Promise<number> {
    try {
      return this.userModel.destroy({ where: { id } });
    } catch (err) {
      const { code, error } = err;
      throw new ErrorException(code, error, [err?.message]);
    }
  }
}
