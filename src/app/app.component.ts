import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TABS } from './constants/tabs.constant';
import { token } from './entities/auth/state/auth.selectors';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public readonly tabs = [...TABS];
  public isAuth$: Observable<boolean> = this._store.pipe(select(token), map(token => !!token));

  constructor(private _store: Store<AppState>) {}
}
