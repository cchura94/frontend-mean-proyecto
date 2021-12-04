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
  prod:Producto = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    imagen:''
  }

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
    const dialogRef = this.dialog.open(ProductoNuevoComponent,{
      width: '600px',
      data: this.prod
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.listaProductos();
    });
  }

  openDialogEditarProducto(producto: any){
    console.log(producto)
    producto.editar = true
    const dialogRef = this.dialog.open(ProductoNuevoComponent,{
      width: '600px',
      data: producto
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.listaProductos();
    });
  }

}
