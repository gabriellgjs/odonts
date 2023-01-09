import { Module } from '@nestjs/common';
import { DataBaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HttpModule, DataBaseModule, AuthModule],
})
export class AppModule {}
