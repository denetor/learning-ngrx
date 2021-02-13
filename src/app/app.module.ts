import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from './features/products/products.module';
import { CounterComponent } from './features/counter/counter.component';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {counterReducer} from './store/reducers/counter.reducer';
import {productsReducer} from './store/reducers/products.reducer';
import { CatfactsComponent } from './features/catfacts/catfacts.component';
import {EffectsModule} from '@ngrx/effects';
import {CatfactsEffects} from './store/effects/catfacts.effects';
import {catfactsReducer} from './store/reducers/catfacts.reducer';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { ListComponent } from './features/list/list.component';
import {listReducer} from './store/reducers/list.reducer';
import {environment} from '../environments/environment';
import { LoginComponent } from './features/login/login.component';
import {FormsModule} from '@angular/forms';
import {loginReducer} from './store/reducers/login.reducer';
import {LoginItem} from './store/models/login.model';
import {LoginEffects} from './store/effects/login.effects';

export interface AppState {
  count: number;
  list: string[];
  catfacts: any[];
  login: LoginItem;
  products: any;
}

export const reducers: ActionReducerMap<AppState> = {
  count: counterReducer,
  list: listReducer,
  catfacts: catfactsReducer,
  login: loginReducer,
  products: productsReducer,
};

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CatfactsComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 10, logOnly: environment.production}),
    EffectsModule.forRoot([CatfactsEffects, LoginEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
