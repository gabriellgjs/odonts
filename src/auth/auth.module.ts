import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersRepository } from 'src/app/repositories/users-repository';
import { DataBaseModule } from 'src/infra/database/database.module';
import { PrismaUsersRepository } from 'src/infra/database/prisma/repositories/prisma-users-repository';
import { HttpModule } from 'src/infra/http/http.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local-strategies';

@Module({
  imports: [DataBaseModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
