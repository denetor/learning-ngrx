import { createReducer, on } from '@ngrx/store';
import {authenticate, authenticateSuccess} from '../actions/login.actions';

export interface AuthState {
  access_token: string | null;
}

const initialState: AuthState = {
  access_token: null
};

export const loginReducer = createReducer(
  initialState,
  on(authenticate, (state: AuthState, action) => {
    console.log('loginReducer.authenticate');
    console.log({state, action});
    return state;
  }),
  on(authenticateSuccess, (state: AuthState, action) => {
    console.log('loginReducer.authenticateSuccess');
    console.log({state, action});
    return action.payload;
  }),
);
