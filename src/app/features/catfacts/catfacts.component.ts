import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getAll} from '../../store/selectors/catfacts.selectors';

@Component({
  selector: 'app-catfacts',
  templateUrl: './catfacts.component.html',
  styleUrls: ['./catfacts.component.sass']
})
export class CatfactsComponent implements OnInit {
  // private catfacts$: Observable<any[]> = this.store.select(state => state.catfacts);
  catfacts$: Observable<any[]> = this.store.pipe(select(getAll));

  constructor(private store: Store<{ catfacts: any[] }>) { }

  ngOnInit() {
    this.store.dispatch({type: '[catfacts] getSome'});
  }
}
