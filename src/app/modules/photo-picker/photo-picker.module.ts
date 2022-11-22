import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PhotoPickerComponent } from './photo-picker.component';


@NgModule({
  declarations: [
    PhotoPickerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PhotoPickerComponent
  ]
})
export class PhotoPickerModule {
}
