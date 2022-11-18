import { Component, OnInit } from '@angular/core';

import { ISegmentItem } from '../../shared/components/layout-switch/interfaces/segmant-item';
import { IBillboard } from '../../interfaces/billboard.interface';
import { LAYOUT_SEGMENT } from '../../constants/layout-segments.constant';
import { BILLBOARDS } from '../home/data/billboards.data';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.page.html',
  styleUrls: ['./boards.page.scss'],
})
export class BoardsPage implements OnInit {

  public billboards: IBillboard[] = [...BILLBOARDS];
  public listView!: 'horizontal' | 'vertical';
  public readonly layoutSegments: ISegmentItem[] = [...LAYOUT_SEGMENT];

  constructor() { }

  public ngOnInit() {
    this.listView = this.layoutSegments[0].value as 'horizontal' | 'vertical';
  }
}
