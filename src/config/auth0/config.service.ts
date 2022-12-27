import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth0ConfigService {
  constructor(private configService: ConfigService) {}

  get audience(): string {
    return this.configService.get<string>('auth0.audience');
  }

  get domain(): string {
    return this.configService.get<string>('auth0.domain');
  }

  get clientId(): string {
    return this.configService.get<string>('auth0.clientId');
  }

  get clientSecret(): string {
    return this.configService.get<string>('auth0.clientSecret');
  }

  get database(): string {
    return this.configService.get<string>('auth0.database');
  }

  get managementClientId(): string {
    return this.configService.get<string>('auth0.managementClientId');
  }

  get managementClientSecret(): string {
    return this.configService.get<string>('auth0.managementClientSecret');
  }
}
