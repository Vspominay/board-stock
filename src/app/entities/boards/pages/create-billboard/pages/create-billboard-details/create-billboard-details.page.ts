import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FILTERS } from '../../../../../home/data/filters.data';
import { BaseCreateBillboardDirective } from '../base-create-billboard.directive';

@Component({
  selector: 'app-create-billboard-details',
  templateUrl: './create-billboard-details.page.html',
  styleUrls: ['./create-billboard-details.page.scss'],
})
export class CreateBillboardDetailsPage extends BaseCreateBillboardDirective {

  public readonly billboardTypes = [...FILTERS];

  constructor(private _fb: FormBuilder) {
    super();
  }

  protected initForm(): void {
    this.createBillboardForm = this._fb.group({
      title: this._fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      description: this._fb.control<string>('', [Validators.required, Validators.minLength(20)]),
      types: this._fb.array<boolean>(this.billboardTypes.map((el, index) => index === 0), [Validators.required])
    });
  }
}
