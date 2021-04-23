import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../models/peliculas';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

}
