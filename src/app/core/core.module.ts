import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from './services/producto.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductoService
  ]
})
export class CoreModule { }
