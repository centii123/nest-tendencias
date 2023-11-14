import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"planets"})
export class PlanetEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({
        name:"name",
        type: "varchar",
        length: "100"
    })
    name: string;
  
    @Column({
        name:"planet_type",
        type: "varchar",
        length: "100"
    })
    planetType: string;
  
    @Column({
        name:"mass",
        type: "integer"
    })
    mass: number;
  
    @Column({
        name:"diameter",
        type: "integer"
    })
    diameter: number;
  
    @Column({
        name:"surface_gravity",
        type: "integer"
    })
    surfaceGravity: number;
  
    @Column({
        name:"distance_from_sun",
        type: "integer"
    })
    distanceFromSun: number;
  
    @Column({
        name:"orbit_period",
        type: "integer"
    })
    orbitPeriod: number;
  
    @Column({
        name:"number_of_moons",
        type: "integer"
    })
    numberOfMoons: number;
  
    @Column({
        name:"atmospheric_composition",
        type: "varchar",
        length: "100"
    })
    atmosphericComposition: string;
  
    @Column({
        name:"surface_temperature",
        type: "integer"
    })
    surfaceTemperature: number;

}