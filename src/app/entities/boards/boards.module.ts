import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { BoardsPageRoutingModule } from './boards-routing.module';
import { BoardsPage } from './boards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardsPageRoutingModule,
    LayoutsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [BoardsPage]
})
export class BoardsPageModule {
}
