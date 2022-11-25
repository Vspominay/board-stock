import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { ICoordinates } from '../../../../../../interfaces/coordinates.interface';
import { setBillboardLocation } from '../../state/create-billboard.actions';
import { BaseCreateBillboardDirective } from '../base-create-billboard.directive';

@Component({
  selector: 'app-create-billboard-location',
  templateUrl: './create-billboard-location.page.html',
  styleUrls: ['./create-billboard-location.page.scss'],
})
export class CreateBillboardLocationPage extends BaseCreateBillboardDirective {

  constructor(
    private _fb: FormBuilder,
    private _navController: NavController,
    private _store: Store,
    private _route: ActivatedRoute
  ) {
    super(_navController, _store, _route);
  }

  public setLocation(locationData: { location: string, coords: ICoordinates }): void {
    this.createBillboardForm.setValue(locationData);
  }

  public onSubmit() {
    super.onSubmit();

    this._store.dispatch(setBillboardLocation(this.createBillboardForm.value));
    this.nextStep();
  }

  protected initForm(): void {
    this.createBillboardForm = this._fb.group({
      location: this._fb.control<string>('', [Validators.required]),
      coords: this._fb.control<ICoordinates | null>(null, [Validators.required])
    });
  }
}
