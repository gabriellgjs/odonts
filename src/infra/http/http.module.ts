import { Module } from '@nestjs/common';
import { DataBaseModule } from '../database/prisma/database.module';

@Module({
  imports: [DataBaseModule],
})
export class HttpModule {}
