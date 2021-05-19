import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardarCreditoComponent } from './guardar-credito/guardar-credito.component';
import { ListarCreditoComponent } from './listar-credito/listar-credito.component';

const routes: Routes = [
  {path:'home',component:GuardarCreditoComponent},
  {path:'listar',component:ListarCreditoComponent},
  {path:'**', pathMatch:'full',redirectTo:'listar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
