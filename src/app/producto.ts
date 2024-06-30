import { Categoria } from "./categoria";

export class Producto {

    idProducto:number;
    nombreProducto:string;
    descripcionProducto:string;
    existencia:string;
    precio:number;
    idCategoria:Categoria;
}
