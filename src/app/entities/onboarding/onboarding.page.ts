import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

import { ONBOARDING } from './constants/onboarding.constant';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage {

  @ViewChild('slidesEl') public slidesEl!: IonSlides;

  public readonly slides = ONBOARDING;

  public isFirstSlide: boolean = true;

  constructor(private _navController: NavController) { }

  public navigateToAuth(): void {
    this._navController.navigateForward(['/auth']);
  }
}
