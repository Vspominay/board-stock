import { Component, Input } from '@angular/core';

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
}
