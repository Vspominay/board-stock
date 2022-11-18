import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_VALIDATOR } from '../../../../constants/email-pattern.constan';
import { NAME_PATTERN } from '../../../../constants/name-pattern.constant';
import { USER } from '../../data/user.data';
import { IUserProfile } from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  public editProfileForm!: FormGroup;

  public user!: IUserProfile;

  constructor(private _fb: FormBuilder) { }

  public ngOnInit() {
    this.user = { ...USER };
    this._initForm();
  }

  public onSubmit(): void {
    if (this.editProfileForm.valid) {

    }
  }

  private _initForm(): void {
    this.editProfileForm = this._fb.group({
      name: this._fb.control<string>(this.user.name, [Validators.required, NAME_PATTERN]),
      phone: this._fb.control<string>(this.user.phone),
      email: this._fb.control<string>(this.user.email, [Validators.required, EMAIL_VALIDATOR])
    });
  }

}
