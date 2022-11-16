import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BaseSelectModalComponent } from './components/base-select-modal/base-select-modal.component';
import { InputComponent } from './components/input/input.component';
import { ErrorControlPipe } from './error-control.pipe';

export const translationConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
    deps: [HttpClient],
  },
  defaultLanguage: 'en',
};

@NgModule({
  declarations: [InputComponent, ErrorControlPipe, BaseSelectModalComponent],
  imports: [
    CommonModule,
    TranslateModule.forRoot(translationConfig),
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TranslateModule,
    InputComponent,
    ErrorControlPipe,
    BaseSelectModalComponent
  ]
})
export class SharedModule {
}
