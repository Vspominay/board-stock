import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { EMAIL_VALIDATOR } from '../../../../../../constants/email-pattern.constan';
import { PHONE_VALIDATOR } from '../../../../../../constants/phone-pattern.constan';
import { AppState } from '../../../../../../reducers';
import { setBillboardFinishInformation } from '../../state/create-billboard.actions';
import { BaseCreateBillboardDirective } from '../base-create-billboard.directive';

@Component({
  selector: 'app-create-billboard-finish',
  templateUrl: './create-billboard-finish.page.html',
  styleUrls: ['./create-billboard-finish.page.scss'],
})
export class CreateBillboardFinishPage extends BaseCreateBillboardDirective {

  public rentPeriodPerMonth: boolean = true;

  constructor(
    private _fb: FormBuilder,
    private _navController: NavController,
    private _store: Store<AppState>,
    private _route: ActivatedRoute
  ) {
    super(_navController, _store, _route);
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  public onSubmit() {
    super.onSubmit();

    const { contactEmail, contactPhone, price: formPrice } = this.createBillboardForm.value;
    const price = this.rentPeriodPerMonth ? formPrice : formPrice / 12;
    this._store.dispatch(setBillboardFinishInformation({
      contactEmail, contactPhone, price
    }));
    this.nextStep();
  }

  protected initForm(): void {
    this.createBillboardForm = this._fb.group({
      price: this._fb.control<number>(30, [Validators.required]),
      contactEmail: this._fb.control<string>('', [Validators.required, EMAIL_VALIDATOR]),
      contactPhone: this._fb.control<string>('', [Validators.required, PHONE_VALIDATOR]),
    });
  }
}
