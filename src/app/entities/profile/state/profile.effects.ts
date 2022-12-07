import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';

import { ProfileService } from '../services/profile.service';
import { ProfileActions } from './profile-actions-types.actions';
import { ProfileDataFetched, ProfileUpdated } from './profile.actions';

@Injectable()
export class ProfileEffects {
  constructor(
    private _actions$: Actions,
    private _profileService: ProfileService,
    private _navController: NavController
  ) {}

  fetchProfileData$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(ProfileActions.FetchProfileData),
                concatMap(() => this._profileService.getProfile()),
                map(profile => ProfileDataFetched(profile))
              )
  );

  updateProfile$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(ProfileActions.UpdateProfile),
                concatMap(({
                  name,
                  photo,
                  email,
                  phone
                }) => this._profileService.updateProfile(name, email, photo, phone)),
                map(profile => ProfileUpdated(profile)),
                tap(() => {
                  this._navController.navigateForward('/profile');
                })
              )
  );
}
