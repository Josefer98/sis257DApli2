import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistasModule } from './artistas/artistas.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenerosModule } from './generos/generos.module';
import { AlbumesModule } from './albumes/albumes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ListasReproduccionesModule } from './listas_reproducciones/listas_reproducciones.module';
import { ListasCancionesModule } from './listas_canciones/listas_canciones.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '*/**entities/*.{ts|js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ArtistasModule,
    GenerosModule,
    AlbumesModule,
    UsuariosModule,
    ListasReproduccionesModule,
    ListasCancionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
