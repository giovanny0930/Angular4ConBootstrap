import { Component, OnInit } from '@angular/core';
import { ProductoDataService } from '../producto-data.service';
import { ProductoDataServerService } from '../producto-data-server.service';

@Component({
  selector: 'producto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    //inicialmente con el de memoria
    private productoDataService:ProductoDataService
    //en server no esta cargando los datos de list
    //private productoDataService:ProductoDataServerService
  ) { }

  ngOnInit() {
    this.productoDataService.loadProductos();
  }

}
