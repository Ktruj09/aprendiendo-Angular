import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: String;
  public apellido: String;
  public edad: number;
 


  constructor(
    //sacamos los parametros de la URL
    private _route: ActivatedRoute,
    //Redirecciones 
    private _router: Router,
  ) { }

  ngOnInit(){

    this._route.params.subscribe((params: Params)=>{
      
      this.nombre = params.nombre;
      this.apellido = params.apellido;
      this.edad = params.edad;
    })
  }

  redirecciones(){
    this._router.navigate(['/formulario'])

    
  }

 
}


