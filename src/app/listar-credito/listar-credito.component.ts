import { Component, OnInit } from '@angular/core';
import { CreditosService } from '../services/creditos/creditos.service';
import { AlertasService } from '../services/alertas/alertas.service';
import { CreditoInterface } from '../interface/credito.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-credito',
  templateUrl: './listar-credito.component.html',
  styleUrls: ['./listar-credito.component.scss']
})
export class ListarCreditoComponent implements OnInit {
  public idCredito:number;
  public credito:CreditoInterface;
  constructor(public _arrayCreditos:CreditosService,
              public _alertas:AlertasService,
              private router:Router) { }

  ngOnInit(): void {
  }

  radio(id:number,credito:any):void{
    this.credito = credito;
    this.idCredito = id;
  }

  quitarCredito(id:number):void{
   id >= 0 ? this._alertas.eliminarCredito(id):this._alertas.error('seleccione el credito que desea eliminar');
    this.idCredito = undefined;
  }

  actualizarCredito():void{
    localStorage.setItem('idCredito',JSON.stringify(this.idCredito));
    localStorage.setItem('actualizarCredito',JSON.stringify(this.credito));
    this.router.navigateByUrl('/home')
  }

}
