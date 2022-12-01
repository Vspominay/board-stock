import { createAction, props } from '@ngrx/store';
import { IUserProfile } from '../interfaces/user.interface';

export const FetchProfileData = createAction(
  '[Profile] Fetch profile data'
);

export const ProfileDataFetched = createAction(
  '[Profile] Profile data fetched',
  props<IUserProfile>()
);

export const UpdateProfile = createAction(
  '[Profile] Update profile',
  props<{ name?: string, email?: string, photo?: string, phone?: string }>()
);

export const ProfileUpdated = createAction(
  '[Profile] Profile updated',
  props<IUserProfile>()
);
