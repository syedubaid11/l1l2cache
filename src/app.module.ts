import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from './cache/cache.module';
import { CachController } from './cach/cach.controller';

@Module({
  imports: [CacheModule],
  controllers: [AppController, CachController],
  providers: [AppService],
})
export class AppModule {}
