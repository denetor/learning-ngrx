import {createAction, props} from '@ngrx/store';

export const getAll = createAction('[list] getAll');
export const push = createAction('[list] push', props<{s: string}>());  // push an element
export const pop = createAction('[list] pop');  // pop an element

