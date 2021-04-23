import {Component } from '@angular/core';



@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: String;
    public comentario: String;
    public year: number; 

    constructor(){
        this.titulo = "Hola Mundo!",
        this.comentario= "Probando los componentes",
        this.year = 2020; 
        console.log("Componente Cargado..");

        console.log(this.titulo, this.comentario, this.year);
    }
}