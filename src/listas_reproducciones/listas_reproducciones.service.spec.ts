import { Test, TestingModule } from '@nestjs/testing';
import { ListasReproduccionesService } from './listas_reproducciones.service';

describe('ListasReproduccionesService', () => {
  let service: ListasReproduccionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListasReproduccionesService],
    }).compile();

    service = module.get<ListasReproduccionesService>(ListasReproduccionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
