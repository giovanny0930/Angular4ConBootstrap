import { Component, OnInit } from '@angular/core';
import { PreventaDataService } from '../preventa-data.service';

@Component({
  selector: 'preventa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  opcionesDePago = [
    "Credito","Efectivo"
  ];
  constructor(
    private preventaDataService:PreventaDataService
  ) { }

  ngOnInit() {
    this.preventaDataService.loadPreventas();
  }

}
