import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Logout } from '../entities/auth/state/auth.actions';
import { token } from '../entities/auth/state/auth.selectors';
import { AppState } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {


  constructor(private store: Store<AppState>, private navController: NavController) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
               .pipe(catchError(err => {
                 const error = !!err.error ? {
                   message: err.error.message,
                   bag: err.error.bag
                 } : err.message;

                 if (err.status === 401) {
                   this.store.dispatch(Logout());
                   this.navController.navigateForward('/auth');
                 }

                 return throwError(error);
               }));
  }
}
