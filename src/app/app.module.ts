import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from './features/products/products.module';
import { CounterComponent } from './features/counter/counter.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/reducers/counter.reducer';
import {productsReducer} from './store/reducers/products.reducer';
import { CatfactsComponent } from './features/catfacts/catfacts.component';
import {EffectsModule} from '@ngrx/effects';
import {CatfactsEffects} from './store/effects/catfacts.effects';
import {catfactsReducer} from './store/reducers/catfacts.reducer';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CatfactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule,
    StoreModule.forRoot({count: counterReducer, products: productsReducer, catfacts: catfactsReducer }),
    EffectsModule.forRoot([CatfactsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
