import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponentProductoDistribuidor } from './index/index.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ProductoDataService } from './producto-data.service';
import{FormsModule} from '@angular/forms';
import { ProductoDataServerService } from './producto-data-server.service';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [IndexComponentProductoDistribuidor, AddComponent, ListComponent],
  providers:[ProductoDataService,ProductoDataServerService]
})
export class ProductoDistribuidorModule { }
