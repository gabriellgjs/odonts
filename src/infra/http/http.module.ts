import { Module } from '@nestjs/common';
import { RegisterRole } from 'src/app/use-cases/register-role';
import { DataBaseModule } from '../database/database.module';
import { RolesController } from './controllers/roles.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [RolesController],
  providers: [RegisterRole],
})
export class HttpModule {}
