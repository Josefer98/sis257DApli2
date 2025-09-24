import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateArtistaDto {
  @IsNotEmpty({ message: 'El  nombre no debe estar vacío' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El nombre no debe tener más de 50 caracteres' })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  readonly nombre: string;

  @IsNotEmpty({ message: 'La nacionalidad no debe estar vacío' })
  @IsString({ message: 'La nacionalidad debe ser una cadena de texto' })
  @MaxLength(50, { message: 'la nacionalidad no debe tener más de 50 caracteres' })
  readonly nacionalidad: string;

  @IsNotEmpty({ message: 'La fotografía no debe estar vacía' })
  @IsString({ message: 'La fotografía debe ser una cadena de texto' })
  @MaxLength(3000, { message: 'La fotografía no debe tener más de 3000 caracteres' })
  readonly fotografia: string;
}
