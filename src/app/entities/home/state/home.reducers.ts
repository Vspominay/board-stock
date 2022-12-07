import { createReducer, on } from '@ngrx/store';
import { IBillboardStatus } from '../../../interfaces/billboard-status.interface';
import { HomeActions } from './home.actions-types';

export interface IHomePage {
  user: {
    name: string,
    notificationCount: number,
    photo: string
  },
  agents: {
    id: string,
    photo: string,
    name: string,
    rate: number
  }[],
  featuredBillboards: IBillboardStatus[]
}

const HOME_INITIAL_STATE: IHomePage = {
  user: {
    name: '',
    notificationCount: 0,
    photo: ''
  },
  agents: [],
  featuredBillboards: []
}

export const homeReducer = createReducer<IHomePage>(
  HOME_INITIAL_STATE,
  on(HomeActions.HomeDataFetched, (state, action) => {
    return {
      ...state,
      ...action.homeData
    }
  })
);
