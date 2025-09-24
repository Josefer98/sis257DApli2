import { Module } from '@nestjs/common';
import { ListasReproduccionesService } from './listas_reproducciones.service';
import { ListasReproduccionesController } from './listas_reproducciones.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListasReproduccion } from './entities/listas_reproduccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ListasReproduccion])],
  controllers: [ListasReproduccionesController],
  providers: [ListasReproduccionesService],
})
export class ListasReproduccionesModule {}
