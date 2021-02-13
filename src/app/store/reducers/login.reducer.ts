import { createReducer, on } from '@ngrx/store';
import {authenticate, authenticateSuccess} from '../actions/login.actions';

const initialState = {access_token: null};

class AuthState {
}

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
