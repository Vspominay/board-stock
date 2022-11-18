import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-field',
  templateUrl: './statistics-field.component.html',
  styleUrls: ['./statistics-field.component.scss'],
})
export class StatisticsFieldComponent {

  @Input() title!: string;
  @Input() subTitle!: string;

  constructor() { }

}
