import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { HomeService } from '../services/home.service';
import { HomeDataFetched } from './home.actions';
import { HomeActions } from './home.actions-types';

@Injectable()
export class HomeEffects {

  constructor(private _actions: Actions, private _homeService: HomeService) {}

  fetchHomeData$ = createEffect(
    () => this._actions
              .pipe(
                ofType(HomeActions.FetchHomeData),
                concatMap(() => this._homeService.fetchHomeData()),
                map(homeData => HomeDataFetched({ homeData }))
              )
  );
}
