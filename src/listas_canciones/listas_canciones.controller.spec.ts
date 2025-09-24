import { Test, TestingModule } from '@nestjs/testing';
import { ListasCancionesController } from './listas_canciones.controller';
import { ListasCancionesService } from './listas_canciones.service';

describe('ListasCancionesController', () => {
  let controller: ListasCancionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListasCancionesController],
      providers: [ListasCancionesService],
    }).compile();

    controller = module.get<ListasCancionesController>(ListasCancionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
