import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListasCancionesService } from './listas_canciones.service';
import { CreateListasCancionDto } from './dto/create-listas_cancion.dto';
import { UpdateListasCancionDto } from './dto/update-listas_cancion.dto';

@Controller('listas_canciones')
export class ListasCancionesController {
  constructor(private readonly listasCancionesService: ListasCancionesService) {}

  @Post()
  create(@Body() createListasCancioneDto: CreateListasCancionDto) {
    return this.listasCancionesService.create(createListasCancioneDto);
  }

  @Get()
  findAll() {
    return this.listasCancionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listasCancionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListasCancioneDto: UpdateListasCancionDto) {
    return this.listasCancionesService.update(+id, updateListasCancioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listasCancionesService.remove(+id);
  }
}
