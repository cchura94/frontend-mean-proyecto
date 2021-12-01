import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { CategoriaComponent } from './components/categoria/categoria.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [NavComponent, DashboardComponent, CategoriaComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule
  ]
})
export class AdminModule { }
