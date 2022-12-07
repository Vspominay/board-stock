import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { PREVIEW_IMAGES } from '../../constants/preview-images.constant';

@Component({
  selector: 'app-auth-welcome',
  templateUrl: './auth-welcome.page.html',
  styleUrls: ['./auth-welcome.page.scss'],
})
export class AuthWelcomePage {

  public readonly previewImages: string[] = PREVIEW_IMAGES;

  constructor(
    private _navController: NavController,
  ) { }

  public routeToSignIn(): void {
    this._navController.navigateForward('/sign-in');
  }

}
