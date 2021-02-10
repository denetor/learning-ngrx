import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from './features/products/products.module';
import { CounterComponent } from './features/counter/counter.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/reducers/counter.reducer';
import {productsReducer} from './store/reducers/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    StoreModule.forRoot({count: counterReducer, products: productsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
