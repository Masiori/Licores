import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicoresService } from './licores.service';
import { CreateLicoreDto } from './dto/create-licore.dto';
import { UpdateLicoreDto } from './dto/update-licore.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('licore')
export class LicoresController {
  constructor(private readonly licoresService: LicoresService) {}

  
  @MessagePattern({cmd:`create-reservas`})
  create(@Payload() createLicoreDto: CreateLicoreDto) {
    return this.licoresService.create(createLicoreDto);
  }

  @MessagePattern({cmd:`find-all`})
  findAll() {
    return this.licoresService.findAll();
  }

  @MessagePattern({cmd:`find-one`})
  findOne(@Payload('id') id: String) {
    return this.licoresService.findOne(id);
  }

  @MessagePattern({cmd:`update-reserva`})
  update(@Payload() updateLicoreDto: UpdateLicoreDto) {
    return this.licoresService.update(updateLicoreDto.id, updateLicoreDto);
  }

  @MessagePattern({cmd:`remove-reserva`})
  remove(@Payload('id') id: String) {
    return this.licoresService.remove(id);
  }
}
