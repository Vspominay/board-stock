import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { PREVIEW_IMAGES } from './constants/preview-images.constant';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {

  public readonly previewImages: string[] = PREVIEW_IMAGES;

  constructor(private _navController: NavController) { }

  public routeToSignIn(): void {
    this._navController.navigateForward('/sign-in');
  }
}
