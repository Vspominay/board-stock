import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { BaseCreateBillboardDirective } from '../base-create-billboard.directive';

@Component({
  selector: 'app-create-billboard-photos',
  templateUrl: './create-billboard-photos.page.html',
  styleUrls: ['./create-billboard-photos.page.scss'],
})
export class CreateBillboardPhotosPage extends BaseCreateBillboardDirective {

  constructor(private _fb: FormBuilder, private _sanitizer: DomSanitizer) {
    super();
  }

  public get photosArray(): FormArray {
    return this.createBillboardForm.get('photos') as FormArray;
  }

  public addImage(imageBase64: string): void {
    this.photosArray.push(new FormControl(imageBase64));
  }

  protected initForm() {
    this.createBillboardForm = this._fb.group({
      photos: this._fb.array<string[]>([], Validators.required)
    });
  }
}
