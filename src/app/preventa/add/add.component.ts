import { Component, OnInit } from '@angular/core';
import { Preventa } from '../preventa';
import { PreventaDataService } from '../preventa-data.service';
declare var $:any;
declare var datepicker:any;


@Component({
  selector: 'preventa-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public preventa:Preventa;
  
  constructor(
    private preventaDataService:PreventaDataService
  ) { }

  ngOnInit() {
    this.preventa = new Preventa();
  }

  onNewClick(){
    this.preventa = new Preventa();
    
  }
  onNewPreventa(){
    this.preventa = new Preventa;
  }
  onSavePreventa(){
    this.preventaDataService.savePreventa(this.preventa);
  }

 private calendario(){
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
 }
 
  

}
