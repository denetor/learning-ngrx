import {createAction, props} from '@ngrx/store';

export const getAll = createAction('[list] getAll');
export const push = createAction('[list] push', props<{s: string}>());

