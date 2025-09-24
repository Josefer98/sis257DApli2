import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>) {}
 
  async create(createUsuarioDto: CreateUsuarioDto):Promise<Usuario> {
    let usuario = await this.usuariosRepository.findOneBy({
       usuario: createUsuarioDto.usuario.trim(),
       email: createUsuarioDto.email.trim(),
       clave: createUsuarioDto.clave.trim(),
       rol: createUsuarioDto.rol.trim(),
       premium: createUsuarioDto.premium,
    });
    if (usuario) throw new Error('El usuario ya existe');
    usuario = new Usuario();
    Object.assign(usuario, createUsuarioDto);
    return this.usuariosRepository.save(usuario);      
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOneBy({ id });
    if (!usuario) throw new Error('El usuario no existe');
    return usuario;
  }
   
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);
    Object.assign(usuario, updateUsuarioDto);
    return this.usuariosRepository.save(usuario);
  }


  async remove(id: number): Promise<Usuario> {
    const usuario = await this.findOne(id);
    return this.usuariosRepository.softRemove(usuario);
  }
}
