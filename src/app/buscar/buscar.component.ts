import { Component, OnInit } from '@angular/core';
import { CreditosService } from '../services/creditos/creditos.service';
import { CreditoInterface } from '../interface/credito.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  public creditos;
  constructor(public _arrayCreditos:CreditosService) { }
  ngOnInit(): void {

  }

  buscarRestaurante(texto:any){
    this.creditos = [];
    if (texto.length > 0) {
      let termino = texto.toLowerCase();
      for (let res of this._arrayCreditos.arrayCreditos) {
        let nombre = res.nombres.toLowerCase();
        if (nombre.indexOf( termino ) >= 0) {
          this.creditos.push(res)
        }
      }
      this._arrayCreditos.creditos$.emit(this.creditos);
    }else{
      this.creditos = this._arrayCreditos.arrayCreditos;
      this._arrayCreditos.creditos$.emit(this.creditos);
    }
  }

  

}
