import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RadioButtonsComponent,
    multi: true
  }]
})
export class RadioButtonsComponent implements ControlValueAccessor {
  public selectedValue!: string;

  @Input() set defaultValue(value: string | undefined) {
    if (!value) return;

    const selectedValueIndex = this.values.findIndex(el => el === value);
    this.selectedValue = selectedValueIndex !== -1 ? this.values[selectedValueIndex] : this.values[0];
  }

  @Input() values!: string[];
  @Input() labels!: string[];
  @Input() avatars!: { isIcon: boolean, avatar: string }[];
  @Input() disabledIndexes?: number[];

  public onChange = (value: { label: string, value: string }) => {
  };
  private onTouched = () => {
  };


  writeValue(value: string): void {
    this.defaultValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public isDisabled(disabledIndexes: number[], currentIndex: number): boolean {
    return disabledIndexes.includes(currentIndex);
  }

}
