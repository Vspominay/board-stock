import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-selection-items',
  templateUrl: './selection-items.component.html',
  styleUrls: ['./selection-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionItemsComponent {
  @Input() title!: string;
  @Input() exploreText?: string;
  @Input() exploreLink?: string;
}
