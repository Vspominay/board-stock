import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ICoordinates } from '../../../../../../interfaces/coordinates.interface';
import { BaseCreateBillboardDirective } from '../base-create-billboard.directive';

@Component({
  selector: 'app-create-billboard-location',
  templateUrl: './create-billboard-location.page.html',
  styleUrls: ['./create-billboard-location.page.scss'],
})
export class CreateBillboardLocationPage extends BaseCreateBillboardDirective {

  constructor(private _fb: FormBuilder) {
    super();
  }

  public setLocation(locationData: { location: string, coords: ICoordinates }): void {
    this.createBillboardForm.setValue(locationData);
  }

  protected initForm(): void {
    this.createBillboardForm = this._fb.group({
      location: this._fb.control<string>('', [Validators.required]),
      coords: this._fb.control<ICoordinates | null>(null, [Validators.required])
    });
  }


}
