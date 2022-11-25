import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions-types';

export interface AuthState {
  email: string,
  token: string
}

const AUTH_INITIAL: AuthState = {
  email: '',
  token: ''
}

export const authReducer = createReducer(
  AUTH_INITIAL,
  on(AuthActions.FinishLogin, (state, action) => {
    return {
      ...state,
      token: action.token,
      email: action.email
    }
  })
)
