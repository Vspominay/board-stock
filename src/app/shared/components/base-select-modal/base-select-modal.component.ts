import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-select-modal',
  templateUrl: './base-select-modal.component.html',
  styleUrls: ['./base-select-modal.component.scss'],
})
export class BaseSelectModalComponent implements OnInit {

  @Input() title!: string;
  @Input() confirmText?: string;
  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

}
