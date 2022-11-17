import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.scss'],
})
export class AgentCardComponent {

  @Input() id!: number;
  @Input() name!: string;
  @Input() img!: string;
  @Input() rate!: number;
  @Input() topRate!: number;
  @Input() totalBillboards!: number;

  constructor() { }

  ngOnInit() {}

}
