import { Test, TestingModule } from '@nestjs/testing';
import { EmisoraService } from './emisora.service';

describe('EmisoraService', () => {
  let service: EmisoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmisoraService],
    }).compile();

    service = module.get<EmisoraService>(EmisoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
