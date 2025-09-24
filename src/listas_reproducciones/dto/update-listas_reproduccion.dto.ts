import { PartialType } from '@nestjs/mapped-types';
import { CreateListasReproduccionDto } from './create-listas_reproduccion.dto';

export class UpdateListasReproduccionDto extends PartialType(CreateListasReproduccionDto) {}
