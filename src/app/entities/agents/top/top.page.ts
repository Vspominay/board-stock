import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../reducers';
import { selectAgents } from '../../home/state/home.selectors';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage {
  public agents$: Observable<{
    id: string,
    photo: string,
    name: string,
    rate: number
  }[]> = this._store.select(selectAgents);

  constructor(private _store: Store<AppState>) { }
}
