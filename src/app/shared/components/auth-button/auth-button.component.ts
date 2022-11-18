import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthButtonComponent {
  @Input() icon!: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
