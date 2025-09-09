import { Test, TestingModule } from '@nestjs/testing';
import { RedisFactoryController } from './redis-factory.controller';

describe('RedisFactoryController', () => {
  let controller: RedisFactoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisFactoryController],
    }).compile();

    controller = module.get<RedisFactoryController>(RedisFactoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
