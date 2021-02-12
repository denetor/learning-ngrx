import {createAction, props} from '@ngrx/store';

export const getSome = createAction('[catfacts] getSome');
export const getOne = createAction('[catfacts] getOne', props<{id: string}>());
