import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {pop, push} from '../../store/actions/list.actions';
import {selectListCount} from '../../store/selectors/list.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  list$: Observable<string[]>;
  listCount$: Observable<number>;

  constructor(
    private store: Store<{ list: string[] }>
  ) {
    this.list$ = this.store.select('list');
    this.listCount$ = this.store.pipe(select(selectListCount));
  }

  ngOnInit() {
  }

  pushRandom(): void {
    const s = this.generateRandomString(3);
    this.store.dispatch(push({s}));
  }

  popItem(): void {
    this.store.dispatch(pop());
  }

  generateRandomString(length: number): string {
    let s = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      s += chars[Math.floor(Math.random() * chars.length)];
    }
    return s;
  }
}
