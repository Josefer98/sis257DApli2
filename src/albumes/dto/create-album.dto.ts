import { Transform } from 'class-transformer';
import { IsDateString, IsDefined, IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAlbumDto {
  @IsDefined({ message: 'El id del artista es obligatorio' })
  @IsInt({ message: 'El id del artista debe ser un número entero' })
  idArtista: number;

  @IsNotEmpty({ message: 'El nombre del álbum es obligatorio' })
  @IsString({ message: 'El nombre del álbum debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre del álbum no debe tener más de 100 caracteres' })
  @Transform(({ value }) => value?.trim())
  nombre: string;

  @IsDefined({ message: 'La fecha de lanzamiento es obligatoria' })
  @IsDateString({}, { message: 'El campo fecha de lanzamiento debe ser una fehca valida' })
  fechaLanzamiento: Date;
}
