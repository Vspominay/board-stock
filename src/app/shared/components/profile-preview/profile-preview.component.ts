import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePreviewComponent {

  @Input() image!: string;
  @Input() fullName!: string;
  @Input() subText!: string;
  @Input() badge: {
    isIcon: boolean,
    content: string
  }
  @Output() onClickBadge: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }
}
