import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInterceptor } from './error.interceptor';
import { JwtInterceptor } from './jwt.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class InterceptorModule {
}
