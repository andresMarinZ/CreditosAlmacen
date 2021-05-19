import { Injectable,EventEmitter } from '@angular/core';
import { CreditoInterface } from '../../interface/credito.interface';

@Injectable({
  providedIn: 'root'
})
export class CreditosService {
  creditos$ = new EventEmitter();
  constructor() { }

  public arrayCreditos:CreditoInterface[] = [
    {
      nombres:'Andres Felipe',
      apellidos:'Marin Zapata',
      numeroDeCelular:3222023431,
      correoElectronico:'andres_marin1992@hotmail.com',
      tipoDeIdentificacion:'CC',
      numeroDeIdentificacion:1152441572,
      direccionResidencia:'carrera 60 # 24 - 85',
      ubicacion:{
        ciudad:'Medellin',
        barrio:'Trinidad'
      },
      valorTotalCredito:1200000,
      numeroCuotas:12
    },
    {
      nombres:'pedro',
      apellidos:'castro',
      numeroDeCelular:3222023431,
      correoElectronico:'pedro@hotmail.com',
      tipoDeIdentificacion:'CC',
      numeroDeIdentificacion:9999874985,
      direccionResidencia:'carrera 60 # 24 - 85',
      ubicacion:{
        ciudad:'Medellin',
        barrio:'Trinidad'
      },
      valorTotalCredito:2000000,
      numeroCuotas:36
    },
    {
      nombres:'Natalia',
      apellidos:'henao rivera',
      numeroDeCelular:3222023431,
      correoElectronico:'natalia@hotmail.com',
      tipoDeIdentificacion:'CC',
      numeroDeIdentificacion:258798856,
      direccionResidencia:'carrera 60 # 24 - 85',
      ubicacion:{
        ciudad:'Medellin',
        barrio:'Trinidad'
      },
      valorTotalCredito:5000000,
      numeroCuotas:48
    }
  ];
}
