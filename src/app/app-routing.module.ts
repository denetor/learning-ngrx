import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent as ProductsIndexComponent } from './features/products/index/index.component';
import {CounterComponent} from './features/counter/counter.component';
import {CatfactsComponent} from './features/catfacts/catfacts.component';


const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'catfacts', component: CatfactsComponent},
  {path: 'products/index', component: ProductsIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
