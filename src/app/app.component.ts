import { Component } from '@angular/core';

import { TABS } from './constants/tabs.constant';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public readonly tabs = [...TABS];

  constructor() {}
}
