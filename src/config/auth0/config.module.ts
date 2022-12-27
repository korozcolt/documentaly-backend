import { ConfigModule, ConfigService } from '@nestjs/config';

import { Auth0ConfigService } from './config.service';
import { Module } from '@nestjs/common';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigService, Auth0ConfigService],
  exports: [ConfigService, Auth0ConfigService],
})
export class Auth0ConfigModule {}
