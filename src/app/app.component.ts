import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaCategoriasComponent } from "./lista-categorias/lista-categorias.component";
import { CategoriaService } from './categoria.service';
import { ProductoService } from './producto.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListaCategoriasComponent]
})
export class AppComponent implements OnInit{
  title = 'Sistema de Gestión de Productos y sus Categorias';


  constructor() {}

  ngOnInit(): void {
    
  }
}
