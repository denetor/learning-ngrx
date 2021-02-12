import {createSelector} from '@ngrx/store';

export const selectList = (state) => state.list;

export const selectListCount = createSelector(
  selectList,
  (state): number => {
    console.log('selectListCount selector:');
    const ret = state ? state.length : 0;
    console.log({state, ret});
    return ret;
  }
);

