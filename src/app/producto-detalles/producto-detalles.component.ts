import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-detalles',
  standalone: true,
  imports: [],
  templateUrl: './producto-detalles.component.html',
  styleUrl: './producto-detalles.component.css'
})
export class ProductoDetallesComponent implements OnInit{

  id:number;
  producto:Producto;

  constructor (private route: ActivatedRoute, private productoServicio:ProductoService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.producto = new Producto();
      this.productoServicio.obtenerProductoById(this.id).subscribe(dato => {
        this.producto = dato;
        Swal.fire(`Detalles del producto ${this.producto.nombreProducto}`);
      });
  }

}
