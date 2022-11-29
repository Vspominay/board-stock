import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LAYOUT_SEGMENT } from '../../constants/layout-segments.constant';
import { IBillboard } from '../../interfaces/billboard.interface';
import { ISegmentItem } from '../../shared/components/layout-switch/interfaces/segmant-item';
import { BILLBOARDS } from '../home/data/billboards.data';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  public listView!: 'horizontal' | 'vertical';
  public readonly layoutSegments: ISegmentItem[] = [...LAYOUT_SEGMENT];
  public favoriteBillboards!: IBillboard[];

  constructor(private _navController: NavController) { }

  public ngOnInit() {
    this.favoriteBillboards = BILLBOARDS.filter(billboard => billboard.isFavorite);
    this.favoriteBillboards.length = 0;
    this.listView = this.layoutSegments[0].value as 'horizontal' | 'vertical';
  }

  public openSearchTab(): void {
    this._navController.navigateForward('/boards');
  }

}
