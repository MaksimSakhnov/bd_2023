import {
  JwtModuleAsyncOptions,
  JwtModuleOptions,
} from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';
import { ConfigService } from '@nestjs/config';

const jwtModuleOptions = (config: ConfigService): JwtModuleOptions => ({
  secret: config.get('JWT_SECRET'),
  signOptions: {
    expiresIn: config.get('JWT_EXP', '5m'),
  },
});

export const optinons = (): JwtModuleAsyncOptions => ({
  inject: [],
  useFactory: (config: ConfigService) => jwtModuleOptions(config),
});
