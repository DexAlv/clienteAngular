import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent implements OnInit{

  producto:Producto = new Producto();
  categorias:Categoria[];
  constructor(private categoriaService: CategoriaService, private productoServicio:ProductoService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.producto);
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  crearProducto(){
    this.productoServicio.crearProducto(this.producto).subscribe(dato => {
      this.irALaListaDeProductos();
    }, error=>console.log(error));
  }

  irALaListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.crearProducto();
  }
}
