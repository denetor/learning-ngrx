import { createReducer, on } from '@ngrx/store';
import {getAll, push} from '../actions/list.actions';

export const listReducer = createReducer(
  ['a', 'b', 'c'] as string[],
  on(getAll, (state, action) => {
    return state;
  }),
  on(push, (state, {s}) => {
    if (s) {
      state.push(s);
    }
    return state;
  })
);
