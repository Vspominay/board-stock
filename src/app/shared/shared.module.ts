import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonComponent } from './components/button/button.component';

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
    ButtonComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot(translationConfig),
  ],
  exports: [
    TranslateModule
  ]
})
export class SharedModule { }
