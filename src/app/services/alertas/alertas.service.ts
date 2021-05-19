import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { CreditosService } from '../creditos/creditos.service';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(public _arrayCreditos:CreditosService,
              public router:Router) { }

  

  error(mensaje){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: mensaje,
    })
  }

  completado(mensaje){
    const swalWithBootstrapButtons1 = Swal.mixin({
      customClass: {
        confirmButton: 'boton-principal',
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons1.fire({
      text:mensaje,
      icon:'success'
    }).then((result) =>{
      if (result) {
        this.router.navigateByUrl('/listar');
      }
    })
  }


  eliminarCredito(id:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'boton-principal',
        cancelButton: 'boton-principal'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro',
      text: "Desea eliminar el credito",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._arrayCreditos.arrayCreditos.splice(id,1);
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'El credito fue eliminado',
          'success'
        )
      }
    })
  }
}
