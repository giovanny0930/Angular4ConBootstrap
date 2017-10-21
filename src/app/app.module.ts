import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';

/*
 export const firebaseConfig = {
  apiKey: "AIzaSyA7UIrsDcn1UPW4hKU-Sy7HXjJjMlPMhYs",
  authDomain: "ng-parqueadero.firebaseapp.com",
  databaseURL: "https://ng-parqueadero.firebaseio.com",
  projectId: "ng-parqueadero",
  storageBucket: "ng-parqueadero.appspot.com",
  messagingSenderId: "127948342928"
}; */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   /* AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,*/

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
