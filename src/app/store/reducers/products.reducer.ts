import { createReducer, on } from '@ngrx/store';
import { index } from '../actions/products.actions';

export const initialState = [];

const _productsReducer = createReducer(
  initialState,
  on(index, (state) => [
    {id: 1, name: 'prova'},
    {id: 2, name: 'test'},
  ])
);

export function productsReducer(state, action) {
  return _productsReducer(state, action);
}
