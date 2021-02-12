import { createReducer, on } from '@ngrx/store';
import {getAll, pop, push} from '../actions/list.actions';

export const listReducer = createReducer(
  [] as string[],
  on(getAll, (state, action) => {
    return state;
  }),
  on(push, (state, {s}) => {
    if (s) {
      state.push(s);
    }
    return state;
  }),
  on(pop, (state) => {
    // pop: removes last item from store
    if (state.length > 0) {
      state.splice(state.length - 1, 1);
    }
    return state;
  })
);
