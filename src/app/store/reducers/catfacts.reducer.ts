import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';
import {getSome, getSomeSuccess} from '../actions/catfacts.actions';

export const catfactsReducer = createReducer(
  [] as any[],
  on(getSome, (state, action) => {
    return state;
  }),
  on(getSomeSuccess, (state, action) => {
    return action.payload;
  })
);
