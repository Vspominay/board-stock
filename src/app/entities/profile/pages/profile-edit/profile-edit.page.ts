import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppState } from '../../../../reducers';
import { EMAIL_VALIDATOR } from '../../../../constants/email-pattern.constan';
import { NAME_PATTERN } from '../../../../constants/name-pattern.constant';
import { UpdateProfile } from '../../state/profile.actions';
import { selectUserInformation } from '../../state/profile.selectors';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  public readonly user$: Observable<{ name: string, phone: string, email: string, photo: string }> = this._store.pipe(
    select(selectUserInformation),
    tap((user) => {
      if (this.editProfileForm) {
        this.editProfileForm.setValue({
          name: `${user.name} ${user.surname}`.trim(),
          phone: user.phone,
          email: user.email
        });
      }
    }),
    map(user => user)
  );
  public editProfileForm!: FormGroup;

  constructor(
    private _store: Store<AppState>,
    private _fb: FormBuilder) { }

  public ngOnInit() {
    this._initForm();
  }

  public onSubmit(): void {
    if (this.editProfileForm.valid) {
      const { name, phone, email } = this.editProfileForm.value;

      this._store.dispatch(UpdateProfile({
        name, email, phone
      }));
    }
  }

  private _initForm(): void {
    this.editProfileForm = this._fb.group({
      name: this._fb.control<string>('', [Validators.required, NAME_PATTERN]),
      phone: this._fb.control<string>(''),
      email: this._fb.control<string>('', [Validators.required, EMAIL_VALIDATOR])
    });
  }

}
