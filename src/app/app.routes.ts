import { Routes } from '@angular/router';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { ActualizarCategoriaComponent } from './actualizar-categoria/actualizar-categoria.component';
import { CategoriaDetallesComponent } from './categoria-detalles/categoria-detalles.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';

export const routes: Routes = [
    { path:'categorias', component:ListaCategoriasComponent },
    { path: 'crear-categoria', component:CrearCategoriaComponent},
    { path: 'actualizar-categoria/:id', component:ActualizarCategoriaComponent },
    { path:'', redirectTo:'categorias', pathMatch:'full'},
    { path: 'categoria-detalles/:id', component:CategoriaDetallesComponent },

    { path:'productos', component:ListaProductosComponent },
    { path:'', redirectTo:'productos', pathMatch:'full'},
    { path: 'crear-producto', component:CrearProductoComponent},
    { path: 'actualizar-producto/:id', component:ActualizarProductoComponent },
    { path: 'producto-detalles/:id', component:ProductoDetallesComponent }
];
