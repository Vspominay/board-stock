import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-select-location',
  templateUrl: './modal-select-location.component.html',
  styleUrls: ['./modal-select-location.component.scss'],
})
export class ModalSelectLocationComponent implements OnInit {

  @Input() locations!: { labels: string[], values: string[], avatars: { isIcon: boolean, avatar: string }[], disabledIndexes: number[] };
  @Input() currentLocation!: string;

  public locationsFormControl!: FormControl;

  constructor(private modalCtrl: ModalController) { }

  public ngOnInit() {
    this.locationsFormControl = new FormControl<string>(this.currentLocation);
  }

  public onConfirm() {
    this.modalCtrl.dismiss(this.locationsFormControl.value, 'confirm');
  }
}
