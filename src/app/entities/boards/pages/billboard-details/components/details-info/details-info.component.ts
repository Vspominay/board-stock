import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsInfoComponent {
  @Input() content!: string;
  @Input() isBoldText: boolean = false;
}
