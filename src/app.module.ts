import { AppConfigModule } from './config/app/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Auth0ConfigModule } from './config/auth0/config.module';
import { Module } from '@nestjs/common';
import { RedisCacheModule } from './config/cache/redisCache.module';

@Module({
  imports: [AppConfigModule, Auth0ConfigModule, RedisCacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
