import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { FILTERS } from '../../../../../home/data/filters.data';
import { setBillboardDetails } from '../../state/create-billboard.actions';
import { AppState } from '../../../../../../reducers';
import { BaseCreateBillboardDirective } from '../base-create-billboard.directive';

@Component({
  selector: 'app-create-billboard-details',
  templateUrl: './create-billboard-details.page.html',
  styleUrls: ['./create-billboard-details.page.scss'],
})
export class CreateBillboardDetailsPage extends BaseCreateBillboardDirective {

  public readonly billboardTypes = [...FILTERS];

  constructor(
    private _fb: FormBuilder,
    private _store: Store<AppState>,
    private _navController: NavController,
    private _activatedRoute: ActivatedRoute
  ) {
    super(_navController, _store, _activatedRoute);
  }

  protected initForm(): void {
    this.createBillboardForm = this._fb.group({
      title: this._fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      description: this._fb.control<string>('', [Validators.required, Validators.minLength(20)]),
      types: this._fb.array<boolean>(this.billboardTypes.map((el, index) => index === 0), [Validators.required])
    });
  }

  public onSubmit() {
    super.onSubmit();

    const { title, description, types } = this.createBillboardForm.value;

    this._store.dispatch(setBillboardDetails({
      title,
      description,
      types: this.billboardTypes.filter((type, index) => types[index])
    }));
    this.nextStep();
  }
}
