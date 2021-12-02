import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'src/app/core/interfaces/producto';
import { ProductoService } from 'src/app/core/services/producto.service';
import { ProductoNuevoComponent } from './producto-nuevo/producto-nuevo.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'precio', 'stock', 'imagen', 'acciones'];
  dataSource:Producto[] = []

  constructor(private productoService: ProductoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listaProductos()
  }

  listaProductos(){
    this.productoService.getProductos().subscribe(
      (res: Producto[]) => {
        console.log(res);
        this.dataSource = res
      },
      (error) => {
        console.log(error);
      }
    )
  }

  openDialogNuevoProducto(){
    this.dialog.open(ProductoNuevoComponent,{
      width: '600px'
    });
  }

}
