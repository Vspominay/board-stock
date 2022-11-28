import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';

import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { BoardsPageRoutingModule } from './boards-routing.module';
import { BoardsPage } from './boards.page';
import { BoardsEffects } from './state/boards.effects';
import { billboardsReducer } from './state/boards.reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardsPageRoutingModule,
    LayoutsModule,
    SharedModule,
    EffectsModule.forFeature([BoardsEffects]),
    StoreModule.forFeature("billboards", billboardsReducer)
  ],
  declarations: [BoardsPage]
})
export class BoardsPageModule {
}
