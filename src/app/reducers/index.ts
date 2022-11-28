import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { authReducer } from '../entities/auth/state/auth.reducers';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];


