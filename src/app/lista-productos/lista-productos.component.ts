import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit{

  productos:Producto[];

  constructor(private productoServicio: ProductoService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaDeProductos().subscribe(dato => {
      console.log(dato);
      this.productos = dato;
    });
  }

  actualizarProducto(id:number){
    this.router.navigate(['actualizar-producto', id]);
  }

  eliminarProducto(id:number){
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
        this.productoServicio.eliminarProducto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerProductos();
        Swal.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        )})}
    });
  }

  verDetallesProducto(id:number){
    this.router.navigate(['/producto-detalles', id]);
  }
}
