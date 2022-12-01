import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EBillboardStatus } from '../../../enums/billboard-status.enum';
import { IUserProfile } from '../interfaces/user.interface';

export const selectProfileState = createFeatureSelector<IUserProfile>('profile');

export const selectUserBillboards = createSelector(
  selectProfileState,
  state => state.billboards
);

export const selectBillboardsByStatus = (status: EBillboardStatus) => createSelector(
  selectUserBillboards,
  billboards => billboards.filter(billboard => billboard.status === status)
)

export const selectUserInformation = createSelector(
  selectProfileState,
  state => ({
    id: state.id,
    name: state.name,
    surname: state.surname,
    email: state.email,
    photo: state.photo,
    phone: state.phone
  })
);
