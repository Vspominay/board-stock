import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LAYOUT_SEGMENT } from '../../constants/layout-segments.constant';
import { IBillboardStatus } from '../../interfaces/billboard-status.interface';
import { ISegmentItem } from '../../shared/components/layout-switch/interfaces/segmant-item';
import { selectFavoriteBillboards } from '../boards/state/boards.selectors';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  public listView!: 'horizontal' | 'vertical';
  public readonly layoutSegments: ISegmentItem[] = [...LAYOUT_SEGMENT];
  public favoriteBillboards$: Observable<IBillboardStatus[]> = this._store.select(selectFavoriteBillboards);

  constructor(
    private _store: Store,
    private _navController: NavController) { }

  public ngOnInit() {
    this.listView = this.layoutSegments[0].value as 'horizontal' | 'vertical';
  }

  public openSearchTab(): void {
    this._navController.navigateForward('/boards');
  }

}
