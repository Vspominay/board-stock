import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../reducers';

import { ISegmentItem } from '../../shared/components/layout-switch/interfaces/segmant-item';
import { IBillboard } from '../../interfaces/billboard.interface';
import { LAYOUT_SEGMENT } from '../../constants/layout-segments.constant';
import { BoardsService } from './service/boards.service';
import { FetchAllBillboards } from './state/boards.actions';
import { selectAllBillboards } from './state/boards.selectors';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.page.html',
  styleUrls: ['./boards.page.scss'],
})
export class BoardsPage implements OnInit {

  public billboards$!: Observable<IBillboard[]>;
  public listView!: 'horizontal' | 'vertical';
  public readonly layoutSegments: ISegmentItem[] = [...LAYOUT_SEGMENT];

  constructor(private store: Store<AppState>, private billboardsService: BoardsService) { }

  public ngOnInit() {
    this.listView = this.layoutSegments[0].value as 'horizontal' | 'vertical';
    this.billboards$ = this.store.pipe(select(selectAllBillboards));
    this.store.dispatch(FetchAllBillboards());
  }
}
