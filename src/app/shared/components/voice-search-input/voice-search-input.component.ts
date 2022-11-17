import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-voice-search-input',
  templateUrl: './voice-search-input.component.html',
  styleUrls: ['./voice-search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: VoiceSearchInputComponent,
      multi: true
    }
  ],
})
export class VoiceSearchInputComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder!: string;

  constructor() { }

  ngOnInit() {}

  private _value: string = '';

  public set value(value: string) {
    if (value && typeof value === 'string') {
      this._value = value;
      this.onChange(value);
    }
  }

  public get value(): string {
    return this._value;
  }

  public onChange(value: string): void {
  }

  public onTouched(): void {
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public writeValue(value: string) {
    this.value = value;
  }
}

