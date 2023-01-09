import { Module } from '@nestjs/common';
import { FindOneRole } from 'src/app/use-cases/find-one-role';
import { RegisterEmployee } from 'src/app/use-cases/register-employee';
import { RegisterRole } from 'src/app/use-cases/register-role';
import { DataBaseModule } from '../database/database.module';
import { EmployeesController } from './controllers/employees.controller';
import { RolesController } from './controllers/roles.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [RolesController, EmployeesController],
  providers: [RegisterRole, RegisterEmployee, FindOneRole],
})
export class HttpModule {}
