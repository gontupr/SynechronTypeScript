import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../models/event'

@Component({
  selector: 'event-deails',
  templateUrl: './event-deails.component.html',
  styleUrls: ['./event-deails.component.css']
})
export class EventDeailsComponent implements OnInit {

  constructor() { }
title:string = "Details of - ";
@Input() event:Event;
  ngOnInit() {
  }

}
