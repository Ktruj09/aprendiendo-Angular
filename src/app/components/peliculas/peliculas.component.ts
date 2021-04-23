import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {Pelicula} from '../../models/peliculas';
import {PeliculasService} from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculasService] 
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: String;
  public peliculas: Pelicula[];
  constructor(

    private _peliculasService: PeliculasService,

  ) { 
    this.titulo = "Componente Peliculas";
    this.peliculas = [
      new Pelicula("Hombre Araña 3", 2007, 'https://wallpaperstock.net/wallpapers/thumbs1/10888wide.jpg'),
      new Pelicula("El Increible Hulk", 2008, 'https://wallpapercave.com/wp/mMWT92p.jpg'),
      new Pelicula("Iron Man", 2008, 'https://wallpapercave.com/wp/wp2547005.jpg'),
      new Pelicula("The Avengers", 2012, 'https://wallpaperaccess.com/full/884080.jpg'),
      new Pelicula("Batman: el caballero de la noche", 2008, 'https://www.beon.com/wp-content/uploads/2018/03/batman-the-dark-knight-movie-hd-wallpaper-2560x1600-3857.jpg'),

      
      
    ]
    console.log("Constructor Lanzado...")
  }

  ngOnInit(){

    
    
    console.log("Componente Iniciado...")
    console.log(this._peliculasService.holamundo);
  }

  ngDoCheck(){
    console.log("Console DoCheck lanzado:...");
  }

  CambiarTitulo(){
    this.titulo = "El Titulo ha Sido Cambiado0";
  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar..");
  }

  

}
