import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { SlidersComponent } from './sliders.component';

@NgModule({
  declarations: [SlidersComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule
  ],
  exports: [SlidersComponent]
})
export class SlidersModule {
}
