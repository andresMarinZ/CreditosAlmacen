import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { CreditosService } from '../creditos/creditos.service';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(public _arrayCreditos:CreditosService) { }

  completado2(id:number){
    Swal.fire({
      text:'Seguro',
      icon:'question'
    }).then((result) =>{
      if (result) {
        this._arrayCreditos.arrayCreditos.splice(id,1);
        console.log('eliminado');
      }else{
        console.log('Salio');
        
      }
    })
  }

  error(mensaje){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: mensaje,
    })
  }


  eliminarCredito(id:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
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
