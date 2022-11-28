import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '../../../reducers';
import { FinishLogin } from '../state/auth.actions';
import { token } from '../state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.pipe(
      select(token),
      map(token => {
        if (token) return true;

        const authUserCachedData: { email: string, name: string, token: string } = JSON.parse(localStorage.getItem('user'));

        if (authUserCachedData.token) {
          this.store.dispatch(FinishLogin(authUserCachedData));
          return true;
        }

        return false;
      }));
  }

}
