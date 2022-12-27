import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabasePostgresConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('postgres.host');
  }

  get port(): number {
    return this.configService.get<number>('postgres.port');
  }

  get username(): string {
    return this.configService.get<string>('postgres.username');
  }

  get password(): string {
    return this.configService.get<string>('postgres.password');
  }

  get database(): string {
    return this.configService.get<string>('postgres.database');
  }
}
