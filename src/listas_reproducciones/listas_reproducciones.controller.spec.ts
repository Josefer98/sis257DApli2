import { Test, TestingModule } from '@nestjs/testing';
import { ListasReproduccionesController } from './listas_reproducciones.controller';
import { ListasReproduccionesService } from './listas_reproducciones.service';

describe('ListasReproduccionesController', () => {
  let controller: ListasReproduccionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListasReproduccionesController],
      providers: [ListasReproduccionesService],
    }).compile();

    controller = module.get<ListasReproduccionesController>(ListasReproduccionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
