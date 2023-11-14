import { Module } from '@nestjs/common';
import { planetsController } from './planets.controller';
import { planetsService } from './planets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanetEntity } from './planets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanetEntity])],
  controllers: [planetsController],
  providers: [planetsService]
})
export class PlanetasModule {}
