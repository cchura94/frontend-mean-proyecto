import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ProductoRoutingModule } from './producto-routing.module';



@NgModule({
  declarations: [
    ProductoComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
