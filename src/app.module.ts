import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from './cache/cache.module';
import { CachController } from './cach/cach.controller';
import { RedisFactoryModule } from './redis-factory/redis-factory.module';

@Module({
  imports: [CacheModule, RedisFactoryModule],
  controllers: [AppController, CachController],
  providers: [AppService],
})
export class AppModule {}
