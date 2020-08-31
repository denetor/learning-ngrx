import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { IndexComponent } from './index/index.component';
import { productsReducer } from '../../store/reducers/products.reducer';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ products: productsReducer })
  ]
})
export class ProductsModule { }
