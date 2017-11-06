import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponentPreventa } from './index/index.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { PreventaDataService } from './preventa-data.service';
import{FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IndexComponentPreventa, AddComponent, ListComponent],
  providers:[PreventaDataService]
})
export class PreventaModule { }
