import { PartialType } from "@nestjs/swagger";
import { planetDTO } from "./Planet.dto";

export class ChangePlanetDTO extends PartialType(planetDTO){
    
}