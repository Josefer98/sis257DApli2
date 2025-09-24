import { Test, TestingModule } from '@nestjs/testing';
import { ListasCancionesService } from './listas_canciones.service';

describe('ListasCancionesService', () => {
  let service: ListasCancionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListasCancionesService],
    }).compile();

    service = module.get<ListasCancionesService>(ListasCancionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
