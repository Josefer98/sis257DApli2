import { ListasReproduccion } from 'src/listas_reproducciones/entities/listas_reproduccion.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 60 })
  usuario: string;

  @Column('varchar', { length: 300 })
  clave: string;

  @Column('varchar', { length: 120 })
  email: string;

  @Column('varchar', { length: 30 })
  rol: string;

  @Column('boolean', { default: false })
  premium: boolean;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @OneToMany(() => ListasReproduccion, (listasReproduccion) => listasReproduccion.usuario)
  listasReproducciones: ListasReproduccion[];
}

// import id, usuario, clave, email, rol, premium
