import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/interfaces/producto';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'precio', 'stock', 'imagen', 'acciones'];
  dataSource:Producto[] = []
  
 constructor(private productoService: ProductoService) { }

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

  ngOnInit(): void {
    this.listaProductos()
  }

}
