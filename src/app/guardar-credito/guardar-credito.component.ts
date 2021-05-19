import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CreditosService } from '../services/creditos/creditos.service';
import { CreditoInterface } from '../interface/credito.interface';
import { Router } from '@angular/router';
import { AlertasService } from '../services/alertas/alertas.service';

@Component({
  selector: 'app-guardar-credito',
  templateUrl: './guardar-credito.component.html',
  styleUrls: ['./guardar-credito.component.scss']
})
export class GuardarCreditoComponent implements OnInit {
  public creditoNuevo:FormGroup;
  public credito:CreditoInterface;
  public arrayNumeroCuotas:number[]=[12,24,36,48];
  public arrayTipoDocumento:string[]=['CC','TI','PASAPORTE'];
  public actualizar:Boolean = false;
  constructor(private fb:FormBuilder,
              private _arrayCreditos:CreditosService,
              private router:Router,
              private _alertas:AlertasService) { 
  }

  ngOnInit(): void {
    this.crearCredito();
    if (JSON.parse(localStorage.getItem('actualizarCredito'))) {
      this.actualizar = true;
      this.credito = JSON.parse(localStorage.getItem('actualizarCredito'));
      console.log(this.credito);
      this.actualizarData();
    }
  }

  ngOnDestroy(): void {
    this.removerLocalstorage();
  }

  get nombreNoValido(){
    return this.creditoNuevo.get('nombres').invalid && this.creditoNuevo.get('nombres').touched
  }

  get apellidosNoValido(){
    return this.creditoNuevo.get('apellidos').invalid && this.creditoNuevo.get('apellidos').touched
  }

  get numeroCelularNoValido(){
    return this.creditoNuevo.get('numeroDeCelular').invalid && this.creditoNuevo.get('numeroDeCelular').touched
  }

  get correoElectronicoNoValido(){
    return this.creditoNuevo.get('correoElectronico').invalid && this.creditoNuevo.get('correoElectronico').touched
  }

  get tipoIdentificacionNoValido(){
    return this.creditoNuevo.get('tipoDeIdentificacion').invalid && this.creditoNuevo.get('tipoDeIdentificacion').touched
  }

  get numeroIdentificacionNoValido(){
    return this.creditoNuevo.get('numeroDeIdentificacion').invalid && this.creditoNuevo.get('numeroDeIdentificacion').touched
  }

  get direccionResidenciaNoValido(){
    return this.creditoNuevo.get('direccionResidencia').invalid && this.creditoNuevo.get('direccionResidencia').touched
  }

  get ciudadNoValido(){
    return this.creditoNuevo.get('ubicacion.ciudad').invalid && this.creditoNuevo.get('ubicacion.ciudad').touched
  }

  get barrioNoValido(){
    return this.creditoNuevo.get('ubicacion.barrio').invalid && this.creditoNuevo.get('ubicacion.barrio').touched
  }

  get valorTotalCreditoNoValido(){
    return this.creditoNuevo.get('valorTotalCredito').invalid && this.creditoNuevo.get('valorTotalCredito').touched
  }

  get numeroCuotasNoValido(){
    return this.creditoNuevo.get('numeroCuotas').invalid && this.creditoNuevo.get('numeroCuotas').touched
  }

  crearCredito():void {
    this.creditoNuevo = this.fb.group({
      nombres:['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      numeroDeCelular: ['',[Validators.required]],
      correoElectronico: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-]+[.]+[a-z]{2,3}$')]],
      tipoDeIdentificacion: ['',[Validators.required]],
      numeroDeIdentificacion: ['',[Validators.required]],
      direccionResidencia: ['',[Validators.required]],
      ubicacion: this.fb.group({
        ciudad:['',[Validators.required]],
        barrio:['',[Validators.required]],
      }),
      valorTotalCredito: ['',[Validators.required]],
      numeroCuotas: ['',[Validators.required]],
    });
  }

  actualizarData():void{
    this.creditoNuevo.reset({
      nombres:this.credito.nombres,
      apellidos: this.credito.apellidos,
      numeroDeCelular: this.credito.numeroDeCelular,
      correoElectronico: this.credito.correoElectronico,
      tipoDeIdentificacion: this.credito.tipoDeIdentificacion,
      numeroDeIdentificacion: this.credito.numeroDeIdentificacion,
      direccionResidencia: this.credito.direccionResidencia,
      ubicacion: {
        ciudad:this.credito.ubicacion.ciudad,
        barrio:this.credito.ubicacion.barrio,
      },
      valorTotalCredito: this.credito.valorTotalCredito,
      numeroCuotas: this.credito.numeroCuotas,
    })
  }

  crearNuevoCredito():void{
    if (!this.actualizar) {
      if (this.creditoNuevo.invalid) {
        return Object.values( this.creditoNuevo.controls).forEach( control => { 
          if (control instanceof FormGroup) {
            Object.values( control.controls ).forEach(control => control.markAsTouched());
          }else{
            control.markAsTouched();
          }
        });  
      }
      this._arrayCreditos.arrayCreditos.push(this.creditoNuevo.value);
      this.creditoNuevo.reset();
      this._alertas.completado('El credito se creo exitosamente');
    }else{
      console.log(this.creditoNuevo.value);
      this._arrayCreditos.arrayCreditos.splice(JSON.parse(localStorage.getItem('idCredito')),1);
      this._arrayCreditos.arrayCreditos.push(this.creditoNuevo.value);
      this.removerLocalstorage();
      this._alertas.completado('El credito se actualizo exitosamente');
    }
  }


  removerLocalstorage():void{
    this.actualizar = false;
    localStorage.removeItem('actualizarCredito');
    localStorage.removeItem('idCredito');
  }

}
