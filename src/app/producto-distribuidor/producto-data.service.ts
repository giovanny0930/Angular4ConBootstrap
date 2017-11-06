import { Injectable } from '@angular/core';
import { ProductoDistribuidor } from './producto-distribuidor';



@Injectable()
export class ProductoDataService {
  productoList: Array<ProductoDistribuidor>;

  
  constructor() {}

private initializeProductoList(){
 
   this.productoList = [
    {
      nombreProducto:"Club Colombia",
      distribuidor:"Bavaria",
      paquetesXCaja: 50,
      unidadesXPaquete: 60,
      precioPaquete: 30000,
      precioCaja:50000,
      precioUnidad: 2000,
      idProducto:"AB345",
      categoria:"Cerveza"
    },
    {
      nombreProducto:"kumis Colacteos",
      distribuidor:"Colacteos",
      paquetesXCaja: 50,
      unidadesXPaquete: 30,
      precioPaquete: 6000,
      precioCaja:30000,
      precioUnidad: 1500,
      idProducto:"BB345",
      categoria:"Lacteos"
    },
    {
      nombreProducto:"arepas de la casa",
      distribuidor:"Normandy",
      paquetesXCaja: 20,
      unidadesXPaquete: 40,
      precioPaquete: 30000,
      precioCaja:60000,
      precioUnidad: 3900,
      idProducto:"CB345",
      categoria:"arepas"
    }
   ]; 
  }
  loadProductos(){
    this.initializeProductoList();
  }
  public saveProducto(producto:ProductoDistribuidor){
    if(!this.productoList){
      this.initializeProductoList();
    }
    this.productoList.push(producto);
  }
}
