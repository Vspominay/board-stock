import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxComponent,
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() title!: string;
  @Input() value!: boolean;
  @Input() disabled!: boolean;
  @Input() isDisableCheck: boolean = false;

  @Output() onChangeValue: EventEmitter<boolean> = new EventEmitter<boolean>;

  public onChange = (value: boolean) => {
  }

  private onTouched = () => {
  };

  public writeValue(value: boolean): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public handleChangeValue(event: any): void {
    this.onChangeValue.emit(event.detail.checked);
    this.onChange(event.detail.checked);
    if (!this.isDisableCheck) {
      this.value = !this.value;
    }
  }
}
