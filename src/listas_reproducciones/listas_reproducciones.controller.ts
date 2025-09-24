import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListasReproduccionesService } from './listas_reproducciones.service';
import { CreateListasReproduccionDto } from './dto/create-listas_reproduccion.dto';
import { UpdateListasReproduccionDto } from './dto/update-listas_reproduccion.dto';

@Controller('listas_reproducciones')
export class ListasReproduccionesController {
  constructor(private readonly listasReproduccionesService: ListasReproduccionesService) {}

  @Post()
  create(@Body() createListasReproduccionDto: CreateListasReproduccionDto) {
    return this.listasReproduccionesService.create(createListasReproduccionDto);
  }

  @Get()
  findAll() {
    return this.listasReproduccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listasReproduccionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListasReproduccionDto: UpdateListasReproduccionDto) {
    return this.listasReproduccionesService.update(+id, updateListasReproduccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listasReproduccionesService.remove(+id);
  }
}
