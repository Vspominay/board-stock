import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { EMAIL_VALIDATOR } from '../../../../../../constants/email-pattern.constan';
import { PHONE_VALIDATOR } from '../../../../../../constants/phone-pattern.constan';
import { BaseCreateBillboardDirective } from '../base-create-billboard.directive';

@Component({
  selector: 'app-create-billboard-finish',
  templateUrl: './create-billboard-finish.page.html',
  styleUrls: ['./create-billboard-finish.page.scss'],
})
export class CreateBillboardFinishPage extends BaseCreateBillboardDirective {

  public rentPeriodPerMonth: boolean = true;

  constructor(private _fb: FormBuilder) {
    super();
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  public onSubmit() {
    super.onSubmit();
    console.log(this.rentPeriodPerMonth);
  }

  protected initForm(): void {
    this.createBillboardForm = this._fb.group({
      price: this._fb.control<number>(30, [Validators.required]),
      contactEmail: this._fb.control<string>('', [Validators.required, EMAIL_VALIDATOR]),
      contactPhone: this._fb.control<string>('', [Validators.required, PHONE_VALIDATOR]),
    });
  }
}
