import { createReducer, on } from '@ngrx/store';
import {getAll, pop, push} from '../actions/list.actions';

export const listReducer = createReducer(
  [] as string[],
  on(getAll, (state, action) => {
    return state;
  }),
  on(push, (state, {s}) => {
    if (s) {
      return [...state, s];
    }
    return state;
  }),
  on(pop, (state) => {
    // pop: removes last item from store
    if (state.length > 0) {
      const newState = [];
      for (let i = 0; i < state.length - 1; i++) {
        newState.push(state[i]);
      }
      return newState;
    }
    return state;
  })
);
