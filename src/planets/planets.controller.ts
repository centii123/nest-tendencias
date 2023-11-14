import { CreatePlanetDTO } from './DTO/CreatePlanet.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdatePlanetDTO } from './DTO/UpdatePlanet.dto copy';
import { planetDTO } from './DTO/Planet.dto';
import { planetsService } from './planets.service';
import { ChangePlanetDTO } from './DTO/change-state-planet.dto';

@ApiTags('planets')
@Controller('planets')
export class planetsController {

    constructor(private readonly PlanetsService:planetsService){}

    @ApiOperation({ description: "find planets", summary: "find planets", })
    @Get()
    async find() {
        return await this.PlanetsService.find()
    }

    @ApiOperation({ description: "find One planet", summary: "find One planet", })
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.PlanetsService.findOne(id);
    }


    @ApiOperation({ description: "Create planet", summary: "Create planet", })
    @Post()
    async create(@Body() payload: CreatePlanetDTO) {
        return await this.PlanetsService.create(payload);
    }



    @ApiOperation({ description: "update planet", summary: "update planet", })
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdatePlanetDTO) {
        return await this.PlanetsService.Put(id,payload);
    }


    @ApiOperation({ description: "change planet", summary: "change planet", })
    @Patch(':id')
    async changeState(@Param('id', ParseIntPipe) id: number, @Body() payload:ChangePlanetDTO) {
        return await this.PlanetsService.changeState(id,payload);
    }


    @ApiOperation({ description: "delete planet", summary: "delete planet", })
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.PlanetsService.delete(id);
    }
}
