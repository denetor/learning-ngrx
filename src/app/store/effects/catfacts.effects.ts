import {Injectable} from '@angular/core';
import {CatfactsService} from '../../core/services/catfacts.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError} from 'rxjs/operators';
import { EMPTY } from 'rxjs';



@Injectable()
export class CatfactsEffects {
  loadCatfacts$ = createEffect(() => this.actions$.pipe(
    ofType('[catfacts] getSome'),
    mergeMap(() => this.catfactsService.getSome()
      .pipe(
        map(catfacts => {
          console.log({method: 'createEffect', catfacts});
          return {type: '[catfacts] getSome success', payload: catfacts};
        }),
        catchError(() => EMPTY)
      )
    ))
  );

  constructor(
    private actions$: Actions,
    private catfactsService: CatfactsService
  ) {}
}
