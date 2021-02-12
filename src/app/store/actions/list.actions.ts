import {createAction, props} from '@ngrx/store';

export const getAll = createAction('[list] getAll');
export const add = createAction('[list] add', props<{s: string}>());

