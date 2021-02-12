import {createAction, props} from '@ngrx/store';

export const index = createAction('[Products Component] Index');
export const insert = createAction('[Products Component] Insert', props<{id: number, name: string}>());
