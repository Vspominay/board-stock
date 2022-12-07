import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TABS } from '../../../constants/tabs.constant';
import { token } from '../../../entities/auth/state/auth.selectors';
import { AppState } from '../../../reducers';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuComponent {

  public readonly menuItems = [{
    route: 'boards/create',
    icon: '/assets/icons/plus.svg',
    activeIcon: 'plus.svg',
    isActive: false
  }, ...TABS];
  public isAuth$: Observable<boolean> = this._store.pipe(select(token), map(token => !!token));

  constructor(private _store: Store<AppState>) {}

}
