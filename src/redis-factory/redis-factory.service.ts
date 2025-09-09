import { Injectable } from '@nestjs/common';


@Injectable()
export class RedisFactoryService {
    createRedisClient() {
        return {
            host: process.env.REDIS_HOST || 'localhost',
            port: parseInt(process.env.REDIS_PORT || '6379', 10),
        };
    }
}
