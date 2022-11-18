import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';

import { FavoritePageRoutingModule } from './favorite-routing.module';

import { FavoritePage } from './favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritePageRoutingModule,
    LayoutsModule,
    SharedModule
  ],
  declarations: [FavoritePage]
})
export class FavoritePageModule {
}
