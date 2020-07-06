import { Test, TestingModule } from '@nestjs/testing';
import { MaratonaLivesController } from './maratona-lives.controller';

describe('MaratonaLives Controller', () => {
  let controller: MaratonaLivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaratonaLivesController],
    }).compile();

    controller = module.get<MaratonaLivesController>(MaratonaLivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
