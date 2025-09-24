import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateListasReproduccionDto } from './dto/create-listas_reproduccion.dto';
import { UpdateListasReproduccionDto } from './dto/update-listas_reproduccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ListasReproduccion } from './entities/listas_reproduccion.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class ListasReproduccionesService {
  constructor(
    @InjectRepository(ListasReproduccion)
    private listasReproduccionesRepository: Repository<ListasReproduccion>,
  ) {}

  async create(
    CreateListasReproduccionDto: CreateListasReproduccionDto,
  ): Promise<ListasReproduccion> {
    let lista = await this.listasReproduccionesRepository.findOneBy({
      nombre: CreateListasReproduccionDto.nombre,
      idUsuario: CreateListasReproduccionDto.idUsuario,
    });
    if (lista) throw new ConflictException('La lista de reproducción ya existe');
    lista = new ListasReproduccion();
    Object.assign(lista, CreateListasReproduccionDto);
    return this.listasReproduccionesRepository.save(lista);
  }

  async findAll(): Promise<ListasReproduccion[]> {
    return this.listasReproduccionesRepository.find({
      relations: { usuario: true },
      select: { id: true, nombre: true, usuario: { id: true } },
      order: { id: 'ASC' },
    });
  }

  async findOne(id: number): Promise<ListasReproduccion> {
    const listaReproduccion = await this.listasReproduccionesRepository.findOne({
      where: { id },
      relations: { usuario: true, ListasCanciones: true },
    });
    if (!listaReproduccion) throw new NotFoundException('La lista de reproducción no existe');
    return listaReproduccion;
  }

  async update(id: number, updateListasReproduccionDto: UpdateListasReproduccionDto): Promise<ListasReproduccion> {
    const listaReproduccion= await this.findOne(id);
    Object.assign(listaReproduccion, updateListasReproduccionDto);
    return this.listasReproduccionesRepository.save(listaReproduccion);
  }

  async remove(id: number): Promise<ListasReproduccion> {
    const listaReproduccion = await this.findOne(id);
    return this.listasReproduccionesRepository.remove(listaReproduccion);
  }
}
