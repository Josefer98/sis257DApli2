import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Transform } from 'class-transformer';

export class CreateUsuarioDto {
    @IsNotEmpty({ message: 'El usuario no debe estar vacío' })
    @IsString({ message: 'El usuario debe ser una cadena de texto' })
    @MaxLength(60, { message: 'El usuario no debe tener más de 60 caracteres' })
    @Transform (({ value }) => (typeof value === 'string' ? value.trim() : value))   
    readonly usuario: string;

    @IsNotEmpty({ message: 'La clave no debe estar vacío' })
    @IsString({ message: 'La clave debe ser una cadena de texto' })
    @MaxLength(300, { message: 'La clave no debe tener más de 300 caracteres' })
    @Transform (({ value }) => (typeof value === 'string' ? value.trim() : value))
    readonly clave: string;

    @IsNotEmpty({ message: 'El email no debe estar vacío' })
    @IsString({ message: 'El email debe ser una cadena de texto' })
    @MaxLength(120, { message: 'El email no debe tener más de 120 caracteres' })
    @Transform (({ value }) => (typeof value === 'string' ? value.trim() : value))
    readonly email: string;

    @IsNotEmpty({ message: 'El rol no debe estar vacío' })
    @IsString({ message: 'El rol debe ser una cadena de texto' })
    @MaxLength(30, { message: 'El rol no debe tener más de 30 caracteres' })
    @Transform (({ value }) => (typeof value === 'string' ? value.trim() : value))
    readonly rol: string;

    @IsNotEmpty({ message: 'El premium no debe estar vacío' })
    readonly premium: boolean;
}
