import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent {

  @Input() id!: number;
  @Input() img!: string;
  @Input() title!: string;
  @Input() isFavorite: boolean = false;
  @Input() price!: number;
  @Input() location!: string;
  @Input() rate?: number;
  @Input() view: 'horizontal' | 'vertical' = 'vertical';
  @Input() type?: string;

  constructor() { }

}
