import { Transform } from "class-transformer";
import { IsDefined, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateListasReproduccionDto {
    
    @IsDefined({ message: 'El id del usuario es obligatorio' })
    @IsInt({ message: 'El id del usuario debe ser un número entero' })
    idUsuario: number;

    @IsNotEmpty({ message: 'El nombre de la lista de reproducción es obligatorio' })
    @IsString({ message: 'El nombre de la lista de reproducción debe ser una cadena de texto' })
    @MaxLength(100, { message: 'El nombre de la lista de reproducción no debe tener más de 100 caracteres' })
    @Transform(({ value }) => value?.trim())
    nombre: string;
}
