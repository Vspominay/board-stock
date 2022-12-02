import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxStripeModule } from 'ngx-stripe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthEffects } from './entities/auth/state/auth.effects';
import { BoardsEffects } from './entities/boards/state/boards.effects';
import { LayoutsModule } from './modules/layouts/layouts.module';
import { reducers } from './reducers';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { InterceptorModule } from './interceptors/interceptor.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    InterceptorModule,
    NgxStripeModule.forRoot(environment.public_stripe),
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects, BoardsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
