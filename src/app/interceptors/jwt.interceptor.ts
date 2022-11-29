import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, flatMap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { token } from '../entities/auth/state/auth.selectors';
import { AppState } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(token).pipe(
      first(),
      flatMap(token => {
        const authReq = !!token ? request.clone({
          setHeaders: { Authorization: 'Bearer ' + token },
        }) : request;
        return next.handle(authReq);
      }),
    );
  }
}
