import { CreatePlanetDTO } from './DTO/CreatePlanet.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PlanetEntity } from './planets.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePlanetDTO } from './DTO/UpdatePlanet.dto copy';
import { ChangePlanetDTO } from './DTO/change-state-planet.dto';


@Injectable()
export class planetsService {

    constructor(@InjectRepository(PlanetEntity) private planetRepository: Repository<PlanetEntity>){}

    async find(){
        const planets:PlanetEntity[]= await this.planetRepository.find();
        return planets;
    }

    async findOne(id:number){
        const findPlanet:PlanetEntity=await this.planetRepository.findOne({
            where:{id:id}
        })

        if(!findPlanet){
            throw new  NotFoundException({
                message: "planeta no encontrado",
                error: "no encontrado"
            })
        }

        return findPlanet;
    }

    async create(payload:CreatePlanetDTO){
        const planetCreate:PlanetEntity=this.planetRepository.create();
        planetCreate.name=payload.name
        planetCreate.planetType=payload.planetType
        planetCreate.mass=payload.mass
        planetCreate.diameter=payload.diameter
        planetCreate.surfaceGravity=payload.surfaceGravity
        planetCreate.distanceFromSun=payload.distanceFromSun
        planetCreate.orbitPeriod=payload.orbitPeriod
        planetCreate.numberOfMoons=payload.numberOfMoons
        planetCreate.atmosphericComposition=payload.atmosphericComposition
        planetCreate.surfaceGravity=payload.surfaceGravity
        planetCreate.surfaceTemperature=payload.surfaceTemperature

        return await this.planetRepository.save(planetCreate);
    }

    async Put(id:number,payload:UpdatePlanetDTO){
        const planetFind:PlanetEntity=await this.findOne(id);
        if(!planetFind){
            throw new  NotFoundException({
                message: "planeta no encontrado",
                error: "no encontrado"
            })
        }

        const UpdatePlanet:UpdatePlanetDTO={...payload}

        /*planetUpdate.name=payload.name
        planetUpdate.planetType=payload.planetType
        planetUpdate.mass=payload.mass
        planetUpdate.diameter=payload.diameter
        planetUpdate.surfaceGravity=payload.surfaceGravity
        planetUpdate.distanceFromSun=payload.distanceFromSun
        planetUpdate.orbitPeriod=payload.orbitPeriod
        planetUpdate.numberOfMoons=payload.numberOfMoons
        planetUpdate.atmosphericComposition=payload.atmosphericComposition
        planetUpdate.surfaceGravity=payload.surfaceGravity
        planetUpdate.surfaceTemperature=payload.surfaceTemperature*/

        return await this.planetRepository.update(id, UpdatePlanet);
    }

    async changeState(id:number, payload:ChangePlanetDTO){
        const existingPlanet:PlanetEntity = await this.findOne(id);

        if (!existingPlanet) {
          throw new NotFoundException({
            message: "planeta no encontrado",
            error: "no encontrado"
        });
        }
    
        const updatedPlanet:PlanetEntity = { ...existingPlanet, ...payload};
        
        return await this.planetRepository.update(id, updatedPlanet);
    }

    async delete(id:number){
        const planetFind= await this.findOne(id);

        if(!planetFind){
            throw new  NotFoundException({
                message: "planeta no encontrado",
                error: "no encontrado"
            })
        }

        return await this.planetRepository.delete(id)
    }
}
