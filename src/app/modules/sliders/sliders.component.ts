import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss'],
})
export class SlidersComponent implements OnInit {
  @ViewChild('slidesEl') public slidesEl!: IonSlides;


  @Input() slides!: string[];

  constructor() { }

  public ngOnInit() {}

}
