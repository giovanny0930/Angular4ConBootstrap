import { Component } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titleParqueo = 'PARQUEADERO';

 my_notes =[
    {id:Date(), title: 'ngf348', description: 'Carro'},
    {id:Date(), title: 'mgd34k', description: 'Moto'},
    {id:Date(), title: 'lkd500', description: 'Carro'},
    {id:Date(), title: 'dql17d', description: 'Moto'},

  ];
  
/* my_notes: FirebaseListObservable<any[]>;

  constructor(public afDB: AngularFireDatabase){
    this.my_notes = afDB.list('/placa');
  }*/

  note = {id:null, title:null, description:null};
  show_form = false;
  editing = false;

  addNote(){
    this.show_form = true;
  }
  viewNote(note){
    this.editing = true;
    this.show_form = true;
    this.note=note;
    this.show_form = true;
  }
  cancel(){
    this.show_form = false;
  }
  
  delete(){
  var auxdelete =this;
  this.my_notes.forEach(function(el, i){
    if(el==auxdelete.note){
      auxdelete.my_notes.splice(i, 1);
    }
  });
  this.show_form = false;
  this.note = {id:null, title:null, description:null};
}

  createNote(){
   /* this.note.id =Date.now();
    this.afDB.database.ref('/placa' + this.note.id).set(this.note);
   */
    if(this.editing){
      var aux = this;
     this.my_notes.forEach(function(el, i){
           if(el.id==aux.note.id){
             aux.my_notes[i]=aux.note;
           }
     });
     aux.show_form = false;
    }else{
      this.note.id= Date(); //Date.now()
      this.my_notes.push(this.note);
      this.show_form = false; //limpiar formulario
      this.note = {id:null, title:null, description:null}; //cerrar formulario

    }
    
  }
}
