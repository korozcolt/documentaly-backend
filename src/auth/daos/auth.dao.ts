import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Auth } from '../../auth/models/auth.model';

@Injectable()
export class AuthDao {
  constructor(
    @InjectModel(Auth)
    private readonly AuthModel: typeof Auth,
  ) {}

  async create({
    userId = null,
    email,
    successful = false,
  }: {
    userId?: string;
    email: string;
    successful?: boolean;
  }): Promise<void> {
    await this.AuthModel.create({
      userId,
      email,
      successful,
    });
  }

  async logout(userId: string): Promise<void> {
    await this.AuthModel.update(
      { successful: false },
      { where: { userId, successful: true } },
    );
  }

  async countAttempts(userId: string): Promise<number> {
    return this.AuthModel.count({
      where: { userId, successful: false },
    });
  }
}
