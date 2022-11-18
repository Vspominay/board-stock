import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ISegmentItem } from './interfaces/segmant-item';

@Component({
  selector: 'app-segment-switch',
  templateUrl: './segment-switch.component.html',
  styleUrls: ['./segment-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SegmentSwitchComponent {

  @Input() value!: string;
  @Input() segments!: ISegmentItem[];
  @Output() onSwitchSegment: EventEmitter<string> = new EventEmitter<string>();

  public changeLayout($event): void {
    this.onSwitchSegment.emit($event);
  }
}
