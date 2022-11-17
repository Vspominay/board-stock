import { Component, OnInit } from '@angular/core';
import { IAgent } from '../../../interfaces/agent.interfaces';
import { AGENTS } from '../data/agents.data';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {

  //TODO: delete it after api integration
  public agents: IAgent[] = [...AGENTS];

  constructor() { }

  ngOnInit() {
  }

}
