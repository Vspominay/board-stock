import { Component, OnInit } from '@angular/core';
import { BILLBOARDS } from '../entities/home/data/billboards.data';
import { FILTERS } from '../entities/home/data/filters.data';
import { IBillboard } from '../interfaces/billboard.interface';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.page.html',
  styleUrls: ['./boards.page.scss'],
})
export class BoardsPage implements OnInit {

  public billboards: IBillboard[] = [...BILLBOARDS];
  public billboardTypes = [...FILTERS];
  public listView: 'horizontal' | 'vertical' = 'vertical';

  constructor() { }

  public ngOnInit() {
  }

  public switchLayout(isHorizontal: boolean): void {
    this.listView = isHorizontal ? 'vertical' : 'horizontal';
  }

}
