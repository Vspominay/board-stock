import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  @Input() icon?: string;
  @Input() iconPosition: 'start' | 'end' = 'start';
  @Input() hasError: boolean = false;
  @Input() error?: string;
  @Input() isReadonly: boolean = false;
  @Input() isPasswordField!: boolean;

  @Output() onHideEv: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isHide: boolean = true;

  public onHide(): void {
    this.isHide = !this.isHide;
    this.onHideEv.emit(this.isHide);
  }
}
