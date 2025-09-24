import { Module } from '@nestjs/common';
import { ListasCancionesService } from './listas_canciones.service';
import { ListasCancionesController } from './listas_canciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListasCancion } from './entities/listas_cancion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ListasCancion])],
  controllers: [ListasCancionesController],
  providers: [ListasCancionesService],
})
export class ListasCancionesModule {}
