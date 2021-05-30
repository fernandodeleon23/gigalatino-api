import { Test, TestingModule } from '@nestjs/testing';
import { EmisoraController } from './emisora.controller';

describe('EmisoraController', () => {
  let controller: EmisoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmisoraController],
    }).compile();

    controller = module.get<EmisoraController>(EmisoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
