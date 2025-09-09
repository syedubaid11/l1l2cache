import { Test, TestingModule } from '@nestjs/testing';
import { RedisFactoryService } from './redis-factory.service';

describe('RedisFactoryService', () => {
  let service: RedisFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisFactoryService],
    }).compile();

    service = module.get<RedisFactoryService>(RedisFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
