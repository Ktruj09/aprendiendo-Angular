import Swal from 'sweetalert2';



  import { Injectable } from '@angular/core';

@Injectable()
export class AlertService{
/**metodo o funcion de alerts para optimizar codigo */
alertError(){
    /**Aca pones la alerta que queras usar */
    Swal.fire('Oops...', 'Que paso amiguito?!', 'error')
  }

  alertaCorrecto(){

    /**aca pones la alerta que queras */
  }
}