import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IBillboard } from '../../../../interfaces/billboard.interface';
import { AppState } from '../../../../reducers';
import { selectBillboard } from '../../state/boards.selectors';

@Component({
  selector: 'app-billboard-details',
  templateUrl: './billboard-details.page.html',
  styleUrls: ['./billboard-details.page.scss'],
})
export class BillboardDetailsPage implements OnInit {

  public billboard$!: Observable<IBillboard>;

  constructor(
    private _store: Store<AppState>,
    private _route: ActivatedRoute) { }

  public ngOnInit() {
    this.billboard$ = this._store.pipe(
      select(selectBillboard(this._route.snapshot.paramMap.get('id')))
    )
  }

}
