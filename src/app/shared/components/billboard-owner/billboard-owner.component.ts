import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-billboard-owner',
  templateUrl: './billboard-owner.component.html',
  styleUrls: ['./billboard-owner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillboardOwnerComponent {

  @Input() id!: number;
  @Input() avatar!: string;
  @Input() name!: string;
}
