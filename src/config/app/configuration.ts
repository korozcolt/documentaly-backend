import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APPLICATION_ENV,
  name: process.env.APPLICATION_NAME,
  url: process.env.APPLICATION_HOST,
  port: process.env.APPLICATION_PORT,
}));
