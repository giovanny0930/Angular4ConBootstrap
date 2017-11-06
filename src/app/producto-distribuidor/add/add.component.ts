import { Component, OnInit } from '@angular/core';
import { ProductoDistribuidor } from '../producto-distribuidor';
import { ProductoDataService } from '../producto-data.service';
@Component({
  selector: 'producto-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public producto:ProductoDistribuidor;
  listaCategorias = [
    {valor: 1,nombre:"Cerveza"},
    {valor: 2,nombre:"Arepas"},
    {valor: 3,nombre:"Lacteos"},
    {valor: 4,nombre:"Licores"},
    {valor: 5,nombre:"Parba"},
    {valor: 6,nombre:"Pasteleria"},
    {valor: 7,nombre:"Bebidas"},
    {valor: 8,nombre:"Granos"},
    
  ];
  constructor(
    private productoDataService:ProductoDataService
  ) { }

  ngOnInit() {
    this.producto = new ProductoDistribuidor();
    //this.productoDataService.loadProductos();
    
  }
  onNewClick(){
    this.producto = new ProductoDistribuidor();
    
  }
  onNewProducto(){
    this.producto = new ProductoDistribuidor;
  }
  onSaveProducto(){
    this.productoDataService.saveProducto(this.producto);
  }

}
