import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-catfacts',
  templateUrl: './catfacts.component.html',
  styleUrls: ['./catfacts.component.sass']
})
export class CatfactsComponent implements OnInit {
    private catfacts$: Observable<any[]> = this.store.select(state => state.catfacts);

    constructor(private store: Store<{ catfacts: any[] }>) { }

    ngOnInit() {
      this.store.dispatch({type: '[Catfacts] Get some'});
    }
}
