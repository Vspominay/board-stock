import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, skip, switchMap, takeUntil, tap } from 'rxjs/operators';

import { IBillboardStatus } from '../../../../interfaces/billboard-status.interface';
import { AppState } from '../../../../reducers';
import { ToggleFavoriteBillboard } from '../../state/boards.actions';
import { selectBillboard } from '../../state/boards.selectors';

@Component({
  selector: 'app-billboard-details',
  templateUrl: './billboard-details.page.html',
  styleUrls: ['./billboard-details.page.scss'],
})
export class BillboardDetailsPage {

  public billboard$: Observable<IBillboardStatus> =
    this._route.paramMap
        .pipe(
          switchMap(paramMap => this._store.select(selectBillboard(paramMap.get('id')))),
          tap(billboard => {
            this.likeToggle$.next(billboard.isFavorite)
          })
        )

  public likeToggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private _store: Store<AppState>,
    private _route: ActivatedRoute) { }

  public ionViewWillEnter(): void {
    this.likeToggle$.pipe(
      takeUntil(this._destroy$),
      skip(3),
      distinctUntilChanged(),
      debounceTime(400),
    ).subscribe((value) => {
      this._store.dispatch(ToggleFavoriteBillboard({ id: this._route.snapshot.paramMap.get('id'), isFavorite: value }));
    });
  }

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
