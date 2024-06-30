import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  //Esta URL obtiene el listado de todas las categorías en el BackEnd
  private apiURL = "http://localhost:8082/apiCategoria/categorias";

  constructor(private http : HttpClient) { }

  //Este método nos sirve para obtener las categorías
  getCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.apiURL);
  }

  //Este método nos sirve para obtener las categorías
  getCategoriaById(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(`${this.apiURL}/${id}`);
  }

  //Este método nos sirve para crear una categoria
  createCategoria(categoria:Categoria): Observable<Object> {
    return this.http.post(`${this.apiURL}`, categoria)
  }

  //Este método nos sirve para actualizar una categoria
  updateCategoria(id:number, categoria:Categoria): Observable<Object> {
    return this.http.put(`${this.apiURL}/${id}`, categoria)
  }

   //Este método nos sirve para borrar una categoria
  deleteCategoria(id:number): Observable<Object> {
    return this.http.delete(`${this.apiURL}/${id}`)
  }

}
