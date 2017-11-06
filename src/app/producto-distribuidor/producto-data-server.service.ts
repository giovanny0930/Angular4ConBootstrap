import { Injectable } from '@angular/core';
import { ProductoDistribuidor } from './producto-distribuidor';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class ProductoDataServerService {
  
  productoList: Array<ProductoDistribuidor>;

  constructor(
    private http:HttpClient
  ) { }

  loadProductos(){
   this.http.get("http://localhost:1814/producto/GetAllProductos")
   .subscribe(data =>{
     this.productoList = data as Array<ProductoDistribuidor> ;
   });
  }
  public saveProducto(producto:ProductoDistribuidor){
    let queryString =  `?nombreProducto=${producto.nombreProducto} & ?distribuidor=${producto.distribuidor}
                        & ?paquetesXCaja=${producto.paquetesXCaja} & ?unidadesXPaquete=${producto.unidadesXPaquete}
                        & ?precioPaquete=${producto.precioPaquete} & ?precioCaja=${producto.precioCaja}
                        & ?precioUnidad=${producto.precioUnidad} & ?idProducto=${producto.idProducto}
                        & ?categoria=${producto.categoria}`
    this.http.get("http://localhost:1814/producto/SaveProductos" + queryString )
    .subscribe(data =>{
      this.loadProductos();
    });
  }
}
