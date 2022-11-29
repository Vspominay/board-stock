import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-billboard-image-preview',
  templateUrl: './billboard-image-preview.component.html',
  styleUrls: ['./billboard-image-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillboardImagePreviewComponent {

  @Input() image!: string;
  @Input() moreImageCount?: number;

}
