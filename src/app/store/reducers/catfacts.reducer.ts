import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState = [{_id: 'initial', text: 'state'}];

const _catfactsReducer = createReducer(
  initialState
);

export function catfactsReducer(state, action) {
  return _catfactsReducer(state, action);
}
