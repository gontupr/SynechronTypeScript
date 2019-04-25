import { Component, OnInit } from '@angular/core';
import {Event} from '../models/event';
import {EventsService} from "../services/events.service"

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
constructor(private _eventsService:EventsService)
{

}
  title:string = "Synechron Future Events List";
  subTile:string= "Published by synechron HR!";
  selectedEvent:Event;
  onEventSelection(event:Event):void
  {
this.selectedEvent = event
  }
  events:Event[] ;

  ngOnInit() {
    this.events = this._eventsService.getAllEvents();
  }

}
