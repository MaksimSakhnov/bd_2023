import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '@modules/user/user.module';
import { optinons } from '@modules/auth/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [PassportModule, JwtModule.registerAsync(optinons()), UserModule],
})
export class AuthModule {}
