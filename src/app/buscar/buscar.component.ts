import { Component, OnInit } from '@angular/core';
import { CreditosService } from '../services/creditos/creditos.service';
import { CreditoInterface } from '../interface/credito.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  buscarRestaurante(texto:any){
    console.log(texto);
  }

  

}
