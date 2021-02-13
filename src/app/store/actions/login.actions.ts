import {createAction, props} from '@ngrx/store';
import {LoginDto} from '../models/login.model';
import * as fromAuth from '../reducers/login.reducer';
import {AuthState} from '../reducers/login.reducer';

export const authenticate = createAction(
  '[login] authenticate',
  props<LoginDto>()
);
export const authenticateSuccess = createAction(
  '[login] authenticate success',
  (authState: AuthState) => ({payload: authState})
);

