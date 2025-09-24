import { Artista } from "src/artistas/entities/artista.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('albumes')
export class Album {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('integer', { name: 'id_artista' })
    idArtista: number;

    @Column('varchar', { length: 100 })
    nombre: string;

    @Column('date', { name: 'fecha_lanzamiento' })
    fechaLanzamiento: Date;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })   
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })    
    fechaEliminacion: Date;

    @ManyToOne(() => Artista, (artista) => artista.albumes)
    @JoinColumn({ name: 'id_artista', referencedColumnName: 'id' })   
    artista: Artista;
}
