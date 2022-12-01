import { createReducer, on } from '@ngrx/store';

import { IUserProfile } from '../interfaces/user.interface';
import { ProfileActions } from './profile-actions-types.actions';

const PROFILE_INITIAL_STATE: IUserProfile = {
  phone: '',
  email: '',
  notifications: [],
  name: '',
  photo: '',
  billboards: [],
  surname: '',
  id: ''
}

export const profileReducer = createReducer<IUserProfile>(
  PROFILE_INITIAL_STATE,
  on(ProfileActions.ProfileDataFetched, (state, action) => {
    return {
      ...state,
      ...action
    }
  }),
  on(ProfileActions.ProfileUpdated, (state, action) => {
    return {
      ...state,
      email: action.email,
      phone: action.phone,
      name: action.name,
      photo: action.photo
    }
  })
);
