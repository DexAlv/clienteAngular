import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-detalles',
  standalone: true,
  imports: [],
  templateUrl: './categoria-detalles.component.html',
  styleUrl: './categoria-detalles.component.css'
})
export class CategoriaDetallesComponent implements OnInit{

  id:number;
  categoria:Categoria;

  constructor (private route: ActivatedRoute, private categoriaServicio:CategoriaService) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.categoria = new Categoria();
      this.categoriaServicio.getCategoriaById(this.id).subscribe(dato => {
        this.categoria = dato;
        Swal.fire(`Detalles de la categoria ${this.categoria.nombreCategoria}`);
      });
  }

}
