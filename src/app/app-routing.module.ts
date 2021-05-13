import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioLoginComponent } from './inventario-login/inventario-login.component';
import { InventarioComponent } from './inventario/inventario.component';


const routes: Routes = [
  {path:"login", component:InventarioLoginComponent},
  {path: "inventario", component:InventarioComponent},
  {path:"**", pathMatch:"full", redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
