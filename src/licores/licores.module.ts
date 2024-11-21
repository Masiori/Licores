import { Module } from '@nestjs/common';
import { LicoresService } from './licores.service';
import { LicoresController } from './licores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Licore } from './entities/licore.entity';

@Module({
  controllers: [LicoresController],
  providers: [LicoresService],
  imports:[TypeOrmModule.forFeature([Licore])]
})
export class LicoresModule {}
