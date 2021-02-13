import {createAction, props} from '@ngrx/store';
import {LoginDto, LoginItem} from '../models/login.model';

export const authenticate = createAction('[login] authenticate', props<LoginDto>());
export const authenticateSuccess = createAction('[login] authenticate success', props<LoginItem>());

