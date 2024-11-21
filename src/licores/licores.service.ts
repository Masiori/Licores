import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateLicoreDto } from './dto/create-licore.dto';
import { UpdateLicoreDto } from './dto/update-licore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Licore } from './entities/licore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LicoresService {
  constructor(
    @InjectRepository(Licore)
    private readonly licoresRepository: Repository<Licore>
  ){}

  async create(createLicoreDto: CreateLicoreDto) {
    try{
      const licor=this.licoresRepository.create(createLicoreDto);
      await this.licoresRepository.save(licor);
      return licor;
    }catch(e) {
      throw new InternalServerErrorException('ya existe');
    }
    
  }

 async findAll() {
  const licores = await this.licoresRepository.find({});
  return licores;
    
  }

  async findOne(id: String) {
    const licor = await this.licoresRepository.findOneBy({id:id});
    if(!licor){
      throw new NotFoundException('Licor no encontrado')
    }
    return licor;
  }

  async update(id: String, updateLicoreDto: UpdateLicoreDto) {
    const licor = await this.licoresRepository.preload({
      id:id,...updateLicoreDto
    })
    if(!licor) {
      throw new NotFoundException('licor no encontrado')
    }
    await this.licoresRepository.save(licor);
    return licor;
  }

  async remove(id: String) {
    const licor = await this.findOne(id);
    this.licoresRepository.delete(licor);
    return licor;
    
  }
}
