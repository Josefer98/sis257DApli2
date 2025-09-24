import { ListasReproduccion } from 'src/listas_reproducciones/entities/listas_reproduccion.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('listas_canciones')
export class ListasCancion {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('integer', { name: 'id_lista_reproduccion' })
  idListaReproduccion: number;

  @Column('integer', { name: 'id_cancion' })
  idCancion: number;

  @Column('date')
  fecha: Date;

  @ManyToOne(()=> ListasReproduccion, (ListasReproduccion) => ListasReproduccion.ListasCanciones)
  @JoinColumn({ name: 'id_lista_reproduccion', referencedColumnName: 'id' })
  listaReproduccion: ListasReproduccion;
}

// id, id_lista_reproduccion, id_cancion, fecha
