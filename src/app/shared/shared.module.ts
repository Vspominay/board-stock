import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BaseSelectModalComponent } from './components/base-select-modal/base-select-modal.component';
import { BillboardOwnerComponent } from './components/billboard-owner/billboard-owner.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { InputComponent } from './components/input/input.component';
import { SelectionItemsComponent } from './components/selection-items/selection-items.component';
import { VoiceSearchInputComponent } from './components/voice-search-input/voice-search-input.component';
import { ErrorControlPipe } from './error-control.pipe';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';

export const translationConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
    deps: [HttpClient],
  },
  defaultLanguage: 'en',
};

@NgModule({
  declarations: [
    InputComponent,
    ErrorControlPipe,
    BaseSelectModalComponent,
    InfoItemComponent,
    RadioButtonsComponent,
    VoiceSearchInputComponent,
    BillboardOwnerComponent,
    SelectionItemsComponent,
    BoardCardComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot(translationConfig),
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    TranslateModule,
    InputComponent,
    ErrorControlPipe,
    BaseSelectModalComponent,
    InfoItemComponent,
    RadioButtonsComponent,
    VoiceSearchInputComponent,
    BillboardOwnerComponent,
    SelectionItemsComponent,
    BoardCardComponent,
    CheckboxComponent
  ]
})
export class SharedModule {
}
