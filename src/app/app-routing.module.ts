import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent as ProductsIndexComponent } from './features/products/index/index.component';
import {CounterComponent} from './features/counter/counter.component';
import {CatfactsComponent} from './features/catfacts/catfacts.component';
import {ListComponent} from './features/list/list.component';
import {LoginComponent} from './features/login/login.component';


const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'list', component: ListComponent},
  {path: 'catfacts', component: CatfactsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products/index', component: ProductsIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
