import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[Auth] Login',
  props<{ email: string, password: string }>()
);

export const FinishLogin = createAction(
  '[Auth] Finish Login',
  props<{ token: string, name: string, email: string }>()
)

export const SignUp = createAction(
  '[Sign Up] Sign up',
  props<{ email: string, name: string, password: string }>()
)

export const Logout = createAction(
  '[Auth] Logout'
)
