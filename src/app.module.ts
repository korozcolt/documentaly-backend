import { AppConfigModule } from './config/app/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasePostgresConfigModule } from './config/database/postgres/config.module';
import { Module } from '@nestjs/common';
import { RedisCacheModule } from './config/cache/redisCache.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AppConfigModule,
    DatabasePostgresConfigModule,
    RedisCacheModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
