import { Injectable } from '@angular/core';
import { Pelicula } from '../models/peliculas';

@Injectable()
export class PeliculasService{

    holamundo(){
        return 'Hola mundo desde un servicio Angular';
    }
}