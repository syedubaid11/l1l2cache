import { Module } from '@nestjs/common';
import { RedisFactoryModule } from 'src/redis-factory/redis-factory.module';
import { RedisFactoryService } from 'src/redis-factory/redis-factory.service';

@Module({
  imports: [RedisFactoryModule],
})
export class CacheModule {
    constructor(private readonly redisFactoryService: RedisFactoryService) {}
    
}
