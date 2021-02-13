import {createAction, props} from '@ngrx/store';

export const getSome = createAction('[catfacts] getSome');
export const getSomeSuccess = createAction('[catfacts] getSome success', props<{id: string}>());
export const getOne = createAction('[catfacts] getOne', props<{id: string}>());

