import { IsDateString, IsDefined, IsInt } from 'class-validator';

export class CreateListasCancionDto {
  @IsDefined({ message: 'El id de la lista de reproducción es obligatorio' })
  @IsInt({ message: 'El id de la lista de reproducción debe ser un número entero' })
  idListaReproduccion: number;

  @IsDefined({ message: 'El id de la canción es obligatorio' })
  @IsInt({ message: 'El id de la canción debe ser un número entero' })
  idCancion: number;

  @IsDefined({ message: 'La fecha es obligatoria' })
  @IsDateString({}, { message: 'El campo fecha debe ser una fecha válida' })
  fecha: Date;
}
