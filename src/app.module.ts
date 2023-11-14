import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanetasModule } from './planets/planets.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 54322,
      username: 'sebas',
      password: '123456789',
      database: 'db_planets',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PlanetasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
