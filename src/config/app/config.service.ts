import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('application.name');
  }

  get env(): string {
    return this.configService.get<string>('application.env');
  }

  get url(): string {
    return this.configService.get<string>('application.host');
  }

  get port(): number {
    return this.configService.get<number>('application.port');
  }
}
