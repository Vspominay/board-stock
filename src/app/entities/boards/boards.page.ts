import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil, tap } from 'rxjs/operators';

import { IBillboardStatus } from '../../interfaces/billboard-status.interface';
import { AppState } from '../../reducers';
import { ISegmentItem } from '../../shared/components/layout-switch/interfaces/segmant-item';
import { LAYOUT_SEGMENT } from '../../constants/layout-segments.constant';
import { ResetSearchResults, SearchBillboards, ToggleFavoriteBillboard } from './state/boards.actions';
import { selectFilteredBillboards, selectSearchString } from './state/boards.selectors';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.page.html',
  styleUrls: ['./boards.page.scss'],
})
export class BoardsPage implements OnInit {

  public readonly billboards$: Observable<IBillboardStatus[]> = this.store.pipe(select(selectFilteredBillboards));
  public listView!: 'horizontal' | 'vertical';
  public readonly layoutSegments: ISegmentItem[] = [...LAYOUT_SEGMENT];
  public searchControl: FormControl<string> = new FormControl();

  private _destroy$: Subject<void> = new Subject<void>();

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.listView = this.layoutSegments[0].value as 'horizontal' | 'vertical';

    this.store.pipe(
      takeUntil(this._destroy$),
      select(selectSearchString),
      tap(searchString => {
        this.searchControl.setValue(searchString);
      })
    ).subscribe();

    this.searchControl.valueChanges
        .pipe(
          takeUntil(this._destroy$),
          distinctUntilChanged(),
          debounceTime(500),
          tap((value) => !value.trim() ? this.store.dispatch(ResetSearchResults()) : 0),
          filter(value => !!value.trim())
        ).subscribe(searchString => this.store.dispatch(SearchBillboards({ searchString })))

  }

  public toggleFavorite(id: string, isFavorite: boolean): void {
    this.store.dispatch(ToggleFavoriteBillboard({ id, isFavorite }));
  }
}
