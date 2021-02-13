import {Injectable} from '@angular/core';
import {CatfactsService} from '../../core/services/catfacts.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {LoginService} from '../../core/services/login.service';
import {LoginDto} from '../models/login.model';



@Injectable()
export class LoginEffects {
  authenticate$ = createEffect(() => this.actions$.pipe(
    ofType('[login] authenticate'),
    mergeMap((action) => this.loginService.authenticate(action)
      .pipe(
        map(authResponse => {
          console.log('LoginEffects.authenticate authResponse:');
          console.log({authResponse});
          return {type: '[login] authenticate success', payload: authResponse};
        }),
        catchError(() => EMPTY)
      )
    ))
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}
}
