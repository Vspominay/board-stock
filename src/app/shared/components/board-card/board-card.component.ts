import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent {

  @Input() img!: string;
  @Input() title!: string;
  @Input() isFavorite: boolean = false;
  @Input() price!: number;
  @Input() location!: string;
  @Input() rate?: number;

  constructor() { }

}
