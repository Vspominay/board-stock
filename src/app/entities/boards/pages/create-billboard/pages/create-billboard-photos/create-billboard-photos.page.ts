import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { setBillboardPhoto } from '../../state/create-billboard.actions';

import { BaseCreateBillboardDirective } from '../base-create-billboard.directive';

@Component({
  selector: 'app-create-billboard-photos',
  templateUrl: './create-billboard-photos.page.html',
  styleUrls: ['./create-billboard-photos.page.scss'],
})
export class CreateBillboardPhotosPage extends BaseCreateBillboardDirective {

  constructor(
    private _fb: FormBuilder,
    private _sanitizer: DomSanitizer,
    private _navController: NavController,
    private _store: Store,
    private _route: ActivatedRoute
  ) {
    super(_navController, _store, _route);
  }

  public get photosArray(): FormArray {
    return this.createBillboardForm.get('photos') as FormArray;
  }

  public addImage(imageBase64: string): void {
    this.photosArray.push(new FormControl(imageBase64));
  }

  public onSubmit() {
    super.onSubmit();

    this._store.dispatch(setBillboardPhoto({ photos: ['https://images.pexels.com/photos/1031700/pexels-photo-1031700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1031700/pexels-photo-1031700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'] }));
    this.nextStep();
  }

  protected initForm() {
    this.createBillboardForm = this._fb.group({
      photos: this._fb.array<string[]>([], Validators.required)
    });
  }
}
