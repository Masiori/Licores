import { PartialType } from '@nestjs/mapped-types';
import { CreateLicoreDto } from './create-licore.dto';

export class UpdateLicoreDto extends PartialType(CreateLicoreDto) {
    id:String
}
