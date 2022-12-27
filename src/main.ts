import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppConfigService } from './config/app/config.service';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { TransformInterceptor } from './utils/interceptors/transform.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  const appConfig: AppConfigService = app.get('AppConfigService');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new TransformInterceptor());

  const options = new DocumentBuilder()
    .setTitle('Backend API')
    .setDescription('API containing all backend endpoints.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(appConfig.port);
}
bootstrap();
