import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { NgFor } from '@angular/common';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-categorias',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-categorias.component.html',
  styleUrl: './lista-categorias.component.css'
})
export class ListaCategoriasComponent implements OnInit{

  categorias:Categoria[];

  constructor(private categoriaServicio:CategoriaService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }
  
  private obtenerCategorias(){
    this.categoriaServicio.getCategorias().subscribe(dato => {
      this.categorias = dato;
    });
  }

  actualizarCategoria(id:number){
    this.router.navigate(['actualizar-categoria', id]);
  }

  eliminarCategoria(id:number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.value) {
        this.categoriaServicio.deleteCategoria(id).subscribe(dato => {
          console.log(dato);
          this.obtenerCategorias();
        Swal.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        )})}
    });
  }

  verDetallesCategoria(id:number){
    this.router.navigate(['/categoria-detalles', id]);
  }
}
