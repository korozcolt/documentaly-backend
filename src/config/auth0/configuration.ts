import { registerAs } from '@nestjs/config';

export default registerAs('auth0', () => ({
  audience: process.env.AUTH0_AUDIENCE,
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  database: process.env.AUTH0_DATABASE,
  managementClientId: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
  managementClientSecret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
}));
