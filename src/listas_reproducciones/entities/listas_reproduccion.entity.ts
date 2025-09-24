import { ListasCancion } from "src/listas_canciones/entities/listas_cancion.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('listas_reproducciones')
export class ListasReproduccion {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('integer', { name: 'id_usuario' })
    idUsuario: number;
    
    @Column('varchar', { length: 100 })
    nombre: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.listasReproducciones)
    @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' }) 
    usuario: Usuario;

    @OneToMany(()=> ListasCancion, (ListasCancion) => ListasCancion.listaReproduccion)
    ListasCanciones: ListasCancion[];
}


//id, nombre, id_usuario