import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent as ProductsIndexComponent } from './features/products/index/index.component';


const routes: Routes = [
  {path: 'products/index', component: ProductsIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
