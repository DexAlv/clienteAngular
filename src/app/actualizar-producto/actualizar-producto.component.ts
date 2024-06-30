import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-actualizar-producto',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent implements OnInit{

  id:number;
  producto:Producto = new Producto();
  categorias:Categoria[];
  constructor(private categoriaService: CategoriaService, private productoServicio:ProductoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoServicio.obtenerProductoById(this.id).subscribe(dato =>{
      this.producto = dato;
    },error => console.log(error));
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
    Swal.fire('Producto actualizado',`El producto ${this.producto.nombreProducto} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.productoServicio.actualizarProducto(this.id,this.producto).subscribe(dato => {
      this.irAlaListaDeProductos();
    },error => console.log(error));
  }
}