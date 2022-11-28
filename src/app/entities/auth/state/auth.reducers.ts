import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions-types';

export interface AuthState {
  email: string,
  token: string,
  name: string
}

const AUTH_INITIAL: AuthState = {
  email: '',
  token: '',
  name: ''
}

export const authReducer = createReducer(
  AUTH_INITIAL,
  on(AuthActions.FinishLogin, (state, action) => {
    return {
      ...state,
      token: action.token,
      email: action.email,
      name: action.name
    }
  }),
  on(AuthActions.Logout, (state) => {
    return {
      token: '',
      email: '',
      name: ''
    }
  })
)
