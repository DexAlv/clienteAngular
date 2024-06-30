import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-categoria',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './crear-categoria.component.html',
  styleUrl: './crear-categoria.component.css'
})
export class CrearCategoriaComponent implements OnInit{

  categoria : Categoria = new Categoria();
  constructor(private categoriaServicio:CategoriaService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.categoria);
  }

  crearCategoria(){
    this.categoriaServicio.createCategoria(this.categoria).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeCategorias();
    }, error=>console.log(error));
  }

  irALaListaDeCategorias(){
    this.router.navigate(['/categorias']);
  }

  onSubmit() {
    this.crearCategoria();
  }
}
