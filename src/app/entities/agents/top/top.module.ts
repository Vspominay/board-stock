import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutsModule } from '../../../modules/layouts/layouts.module';
import { SharedModule } from '../../../shared/shared.module';

import { TopPageRoutingModule } from './top-routing.module';

import { TopPage } from './top.page';
import { AgentCardComponent } from '../components/agent-card/agent-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopPageRoutingModule,
    LayoutsModule,
    SharedModule
  ],
  declarations: [TopPage, AgentCardComponent]
})
export class TopPageModule {
}
