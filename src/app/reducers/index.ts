import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { authReducer } from '../entities/auth/state/auth.reducers';
import { billboardsReducer } from '../entities/boards/state/boards.reducers';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  billboards: billboardsReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];


