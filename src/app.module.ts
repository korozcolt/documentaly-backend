import { AppConfigModule } from './config/app/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { RedisCacheModule } from './config/cache/redisCache.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AppConfigModule, RedisCacheModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
