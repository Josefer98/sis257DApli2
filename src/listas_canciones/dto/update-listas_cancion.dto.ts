import { PartialType } from '@nestjs/mapped-types';
import { CreateListasCancionDto } from './create-listas_cancion.dto';

export class UpdateListasCancionDto extends PartialType(CreateListasCancionDto) {}
