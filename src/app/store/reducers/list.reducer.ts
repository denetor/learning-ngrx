import { createReducer, on } from '@ngrx/store';
import { getAll, add } from '../actions/list.actions';

export const listReducer = createReducer(
  ['a', 'b', 'c'] as string[],
  on(getAll, (state, action) => {
    return state;
  })
);
