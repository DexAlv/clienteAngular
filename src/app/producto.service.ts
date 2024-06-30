import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Esta URL obtiene el listado de todos los productos en el BackEnd
  private apiURL = "http://localhost:8082/apiProducto/productos";

  constructor(private http : HttpClient) { }

  //Este método nos sirve para obtener los productos
  obtenerListaDeProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiURL);
  }

  //Este método nos sirve para obtener un producto especifico
  obtenerProductoById(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.apiURL}/${id}`);
  }

  //Este método nos sirve para crear un producto
  crearProducto(producto:Producto): Observable<Object> {
    return this.http.post(`${this.apiURL}`, producto)
  }

  //Este método nos sirve para actualizar un producto
  actualizarProducto(id:number, producto:Producto): Observable<Object> {
    return this.http.put(`${this.apiURL}/${id}`, producto)
  }

   //Este método nos sirve para borrar un producto
  eliminarProducto(id:number): Observable<Object> {
    return this.http.delete(`${this.apiURL}/${id}`)
  }
}
