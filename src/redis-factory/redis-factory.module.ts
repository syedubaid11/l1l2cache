import { Module } from '@nestjs/common';
import { RedisFactoryService } from './redis-factory.service';

@Module({
  providers: [RedisFactoryService],
})
export class RedisFactoryModule {}
