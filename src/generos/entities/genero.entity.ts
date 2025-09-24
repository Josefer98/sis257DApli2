import { Entity } from 'typeorm';

export class Genero {}

@Entity('generos')
export class GeneroEntity extends Genero {
  id: number;
  nombre: string;
}
