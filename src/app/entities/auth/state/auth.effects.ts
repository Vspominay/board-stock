import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { FinishLogin } from './auth.actions';
import { AuthActions } from './auth.actions-types';

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _navController: NavController
  ) {}

  login$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(AuthActions.Login),
                concatMap(({ email, password }) => this._authService.login(email, password)),
                tap(({ email, name, token }) => localStorage.setItem('user', JSON.stringify({ email, name, token }))),
                map((authData: { email: string, name: string, token: string }) => FinishLogin(authData)),
                tap(() => {
                  this._navController.navigateForward('/home');
                })
              )
  );

  signUp$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(AuthActions.SignUp),
                concatMap(({ email, password, name }) => this._authService.signUp(email, name, password)),
                tap(({ email, name, token }) => localStorage.setItem('user', JSON.stringify({ email, name, token }))),
                map((authData: { email: string, name: string, token: string }) => FinishLogin(authData)),
                tap(() => {
                  this._navController.navigateForward('/home');
                })
              )
  );

  logout$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(AuthActions.Logout),
                tap(() => {
                  localStorage.removeItem('user');
                  this._navController.navigateForward(['/auth']);
                })
              ),
    { dispatch: false }
  );
}
