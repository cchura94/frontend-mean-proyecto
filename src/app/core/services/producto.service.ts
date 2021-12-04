import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Producto } from '../interfaces/producto';
import { environment } from "./../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url_base = environment.url

  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get<Producto[]>(`${this.url_base}/producto`);
  }

  guardarProducto(datos: FormGroup){
    const formData:FormData = new FormData();
    formData.append('nombre', datos.value.nombre);
    formData.append('precio', datos.value.precio+"");
    formData.append('stock', datos.value.stock+"");
    formData.append('descripcion', datos.value.descripcion);
    formData.append("imagen", datos.get('imagen')?.value)
    

    
    return this.http.post(`${this.url_base}/producto`, formData)
  }

  editarProducto(datos: FormGroup, id:string){
    const formData:FormData = new FormData();
    formData.append('nombre', datos.value.nombre);
    formData.append('precio', datos.value.precio+"");
    formData.append('stock', datos.value.stock+"");
    formData.append('descripcion', datos.value.descripcion);
    formData.append("imagen", datos.get('imagen')?.value)
    

    
    return this.http.put(`${this.url_base}/producto/${id}`, formData)
  }
}
