import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { CategoriaComponent } from './components/categoria/categoria.component';
import { MaterialModule } from '../material/material.module';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoNuevoComponent } from './components/producto/producto-nuevo/producto-nuevo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PedidoComponent } from './components/pedido/pedido.component';


@NgModule({
  declarations: [NavComponent, DashboardComponent, CategoriaComponent, ProductoComponent, ProductoNuevoComponent, PedidoComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
