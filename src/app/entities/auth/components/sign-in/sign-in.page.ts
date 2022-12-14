import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../reducers';
import { Login } from '../../state/auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  public signInForm!: FormGroup;
  public isShowPassword: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<AppState>
  ) { }

  public ngOnInit() {
    this._initForm();
  }

  public onSubmit(): void {
    if (this.signInForm.valid) {
      this._store.dispatch(Login(this.signInForm.value));
    }
  }

  private _initForm(): void {
    this.signInForm = this._fb.group({
      email: this._fb.control('', [Validators.required]),
      password: this._fb.control('', [Validators.required])
    });
  }

}
