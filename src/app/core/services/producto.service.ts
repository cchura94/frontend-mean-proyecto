import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
