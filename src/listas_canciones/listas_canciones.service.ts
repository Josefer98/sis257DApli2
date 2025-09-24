import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateListasCancionDto } from './dto/create-listas_cancion.dto';
import { UpdateListasCancionDto } from './dto/update-listas_cancion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ListasCancion } from './entities/listas_cancion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListasCancionesService {
  constructor(
    @InjectRepository(ListasCancion) private listasCancionesRepository: Repository<ListasCancion>,
  ) {}

  async create(createListasCancionDto: CreateListasCancionDto): Promise<ListasCancion> {
    let listaCancion = await this.listasCancionesRepository.findOneBy({
      idListaReproduccion: createListasCancionDto.idListaReproduccion,
      idCancion: createListasCancionDto.idCancion,
      fecha: createListasCancionDto.fecha,
    });
    if (listaCancion) throw new ConflictException('La canción ya está en la lista de reproducción');
    listaCancion = new ListasCancion();
    Object.assign(listaCancion, createListasCancionDto);
    return this.listasCancionesRepository.save(listaCancion);
  }

  async findAll(): Promise<ListasCancion[]> {
    return this.listasCancionesRepository.find({
      relations: { listaReproduccion: true },
      select: {
        id: true,
        listaReproduccion: { id: true },
        idCancion: true,
        fecha: true,
      },
      order: { id: 'ASC' },
    });
  }

  async findOne(id: number): Promise<ListasCancion> {
    const listaCancion = await this.listasCancionesRepository.findOne({
      where: { id },
      relations: { listaReproduccion: true }, 
    });
    if (!listaCancion) throw new NotFoundException('La canción en la lista de reproducción no existe');
    return listaCancion;
  }

  async update(id: number, updateListasCancionDto: UpdateListasCancionDto): Promise<ListasCancion> {
    const listaCancion = await this.findOne(id);
    Object.assign(listaCancion, updateListasCancionDto);
    return this.listasCancionesRepository.save(listaCancion);
  }

 async remove(id: number): Promise<ListasCancion> {
    const listaCancion = await this.findOne(id);
    return this.listasCancionesRepository.remove(listaCancion);
  }
}
