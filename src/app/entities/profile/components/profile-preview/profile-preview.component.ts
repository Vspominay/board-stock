import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  constructor() { }
}
