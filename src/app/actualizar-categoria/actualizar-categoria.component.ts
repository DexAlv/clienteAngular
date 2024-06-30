import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-actualizar-categoria',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './actualizar-categoria.component.html',
  styleUrl: './actualizar-categoria.component.css'
})
export class ActualizarCategoriaComponent implements OnInit{

  id:number;
  categoria:Categoria = new Categoria();
  constructor(private categoriaServicio:CategoriaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoriaServicio.getCategoriaById(this.id).subscribe(dato =>{
      this.categoria = dato;
    },error => console.log(error));
  }

  irAlaListaDeCategorias(){
    this.router.navigate(['/categorias']);
    Swal.fire('Categoria actualizada',`La categoria ${this.categoria.nombreCategoria} ha sido actualizada con exito`,`success`);
  }

  onSubmit(){
    this.categoriaServicio.updateCategoria(this.id,this.categoria).subscribe(dato => {
      this.irAlaListaDeCategorias();
    },error => console.log(error));
  }
}
