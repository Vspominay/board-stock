import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { EMAIL_VALIDATOR } from '../../../constants/email-pattern.constan';
import { NAME_PATTERN } from '../../../constants/name-pattern.constant';
import { PASSWORD_VALIDATOR } from '../../../constants/password.constant';
import { AppState } from '../../../reducers';
import { SignUp } from '../state/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public signUpForm!: FormGroup;
  public isShowPassword: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _navController: NavController,
    private store: Store<AppState>
  ) { }

  public ngOnInit() {
    this._initForm();
  }

  public onSubmit(): void {
    if (this.signUpForm.valid) {
      this.store.dispatch(SignUp(this.signUpForm.value));
    }
  }

  private _initForm(): void {
    this.signUpForm = this._fb.group({
      name: this._fb.control('', [Validators.required, NAME_PATTERN]),
      email: this._fb.control('', [Validators.required, EMAIL_VALIDATOR]),
      password: this._fb.control('', [Validators.required, PASSWORD_VALIDATOR])
    });
  }

}
