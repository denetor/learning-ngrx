import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {index} from '../../../store/actions/products.actions';

@Component({
  selector: 'ndr-products-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
    products$: Observable<any[]>;

    constructor(
        private store: Store<{ products: any[] }>
    ) {
        this.products$ = store.pipe(select('products'));
    }

    ngOnInit() {
      this.store.dispatch(index());
    }

}
