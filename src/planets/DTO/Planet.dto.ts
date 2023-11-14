import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsNotEmptyValidationOption, IsNumberValidationOption, IsStringValidationOption } from "src/common/messegeDTO";

export class planetDTO {
    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsString(IsStringValidationOption())
    name: string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsString(IsStringValidationOption())
    planetType: string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    mass: number;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    diameter: number;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    surfaceGravity: number;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    distanceFromSun: number;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    orbitPeriod: number;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    numberOfMoons: number;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsString(IsStringValidationOption())
    atmosphericComposition: string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    surfaceTemperature: number;
}