import { Injectable } from '@angular/core';
import { Preventa } from './preventa';

@Injectable()
export class PreventaDataService {
  preventaList:Array<Preventa>;
  constructor() { }

  private initializePreventaList(){
    
      this.preventaList = [
       {
         fechaVenta:"01/11/2017",
         totalVenta:780000,
         cliente: "Samuel Andres Carbonell",
         medioPago: "Credito"
       },
       {
        fechaVenta:"02/11/2017",
        totalVenta:1200000,
        cliente: "Monica Andrea Torres",
        medioPago: "Efectivo"
      },
      {
        fechaVenta:"03/11/2017",
        totalVenta:860000,
        cliente: "Giovanny Andres Carbonell Vargas",
        medioPago: "Credito"
      }
      ]; 
     }
     loadPreventas(){
      this.initializePreventaList();
    }
    public savePreventa(preventa:Preventa){
      if(!this.preventaList){
        this.initializePreventaList();
      }
      this.preventaList.push(preventa);
    }

}
