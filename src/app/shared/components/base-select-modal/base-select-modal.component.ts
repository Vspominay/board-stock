import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-select-modal',
  templateUrl: './base-select-modal.component.html',
  styleUrls: ['./base-select-modal.component.scss'],
})
export class BaseSelectModalComponent implements OnInit {

  @Input() title!: string;
  @Input() confirmText?: string;

  constructor() { }

  ngOnInit() {}

}
