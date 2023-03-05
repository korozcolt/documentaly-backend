import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { UsersController } from './controllers/users.controller';
import { UsersDao } from './daos/users.dao';
import { UsersService } from './services/users.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService, UsersDao],
})
export class UsersModule {}
