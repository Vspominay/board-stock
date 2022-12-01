import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IBillboardStatus } from '../../interfaces/billboard-status.interface';
import { AppState } from '../../reducers';
import { ISegmentItem } from '../../shared/components/layout-switch/interfaces/segmant-item';
import { LAYOUT_SEGMENT } from '../../constants/layout-segments.constant';
import { ToggleFavoriteBillboard } from './state/boards.actions';
import { selectAllBillboards } from './state/boards.selectors';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.page.html',
  styleUrls: ['./boards.page.scss'],
})
export class BoardsPage implements OnInit {

  public readonly billboards$: Observable<IBillboardStatus[]> = this.store.pipe(select(selectAllBillboards));
  public listView!: 'horizontal' | 'vertical';
  public readonly layoutSegments: ISegmentItem[] = [...LAYOUT_SEGMENT];

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.listView = this.layoutSegments[0].value as 'horizontal' | 'vertical';
  }

  public toggleFavorite(id: string, isFavorite: boolean): void {
    this.store.dispatch(ToggleFavoriteBillboard({ id, isFavorite }));
  }
}
