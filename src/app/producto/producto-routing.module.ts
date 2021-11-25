import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent
  },
  {
    path: ':id',
    component: ProductoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
