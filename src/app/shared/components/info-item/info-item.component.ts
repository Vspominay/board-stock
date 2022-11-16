import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoItemComponent implements OnInit {

  @Input() avatar?: string;
  @Input() isIcon: boolean = true;
  @Input() label!: string;
  @Input() isActive: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {}

}
