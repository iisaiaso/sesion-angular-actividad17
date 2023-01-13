import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HearderComponent } from './hearder/hearder.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    HearderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ProductComponent,
    HearderComponent
  ]
})
export class ComponentsModule { }
