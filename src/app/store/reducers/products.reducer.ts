import { createReducer, on } from '@ngrx/store';
import { index, insert } from '../actions/products.actions';

export let initialState: any[] = [
  {id: 1, name: 'prova'},
  {id: 2, name: 'test'},
];
let currentState = initialState;

const _productsReducer = createReducer(
  initialState,
  on(index, state => currentState),
  on(insert, (state, {id, name}) => {
    currentState.push({id, name});
    return currentState;
  })
);

export function productsReducer(state, action) {
  return _productsReducer(state, action);
}

