import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

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

}
