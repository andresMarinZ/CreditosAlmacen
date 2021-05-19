import { Component, OnInit } from '@angular/core';
import { CreditosService } from '../services/creditos/creditos.service';
import { AlertasService } from '../services/alertas/alertas.service';
import { CreditoInterface } from '../interface/credito.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-credito',
  templateUrl: './listar-credito.component.html',
  styleUrls: ['./listar-credito.component.scss']
})
export class ListarCreditoComponent implements OnInit {
  public idCredito:number;
  public credito:CreditoInterface;
  public creditoSubscription:Subscription;
  public arrayCreditos:CreditoInterface[] = [];
  constructor(public _arrayCreditos:CreditosService,
              public _alertas:AlertasService,
              private router:Router) { }

  ngOnInit(): void {
    this.arrayCreditos = this._arrayCreditos.arrayCreditos;
    this.observableBuscarRestaurante();
  }

  observableBuscarRestaurante():void{
    this.creditoSubscription = this._arrayCreditos.creditos$.subscribe(respuesta => this.arrayCreditos = respuesta);
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

  ngOnDestroy(): void {
    this.creditoSubscription.unsubscribe();
  }

}
