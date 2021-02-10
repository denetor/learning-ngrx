import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent as ProductsIndexComponent } from './features/products/index/index.component';
import {CounterComponent} from './features/counter/counter.component';


const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'products/index', component: ProductsIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
