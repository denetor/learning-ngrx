import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {push} from '../../store/actions/list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  list$: Observable<string[]>;

  constructor(
    private store: Store<{ list: string[] }>
  ) {
    this.list$ = store.select('list');
  }

  ngOnInit() {
  }

  addRandomString(): void {
    const s = this.generateRandomString(3);
    this.store.dispatch(push({s}));
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
