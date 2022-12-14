import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() title?: string;
  @Input() backButtonIcon: string = 'assets/icons/back-arrow.svg';
  @Input() additionalIcon?: string;
  @Input() secondAdditionalIcon?: string;
  @Input() defaultHref?: string;
  @Input() isTransparent: boolean = false;

  @Output() onAdditionalClick: EventEmitter<void> = new EventEmitter<void>();
}
