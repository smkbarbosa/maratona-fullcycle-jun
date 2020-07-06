import { Test, TestingModule } from '@nestjs/testing';
import { MaratonaLivesService } from './maratona-lives.service';

describe('MaratonaLivesService', () => {
  let service: MaratonaLivesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaratonaLivesService],
    }).compile();

    service = module.get<MaratonaLivesService>(MaratonaLivesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
