import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout-switch',
  templateUrl: './layout-switch.component.html',
  styleUrls: ['./layout-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutSwitchComponent {

  @Input() isHorizontal: boolean = true;
  @Output() onSwitchLayout: EventEmitter<boolean> = new EventEmitter<boolean>();

  public changeLayout(): void {
    this.onSwitchLayout.emit(this.isHorizontal);
    this.isHorizontal = !this.isHorizontal;
  }
}
