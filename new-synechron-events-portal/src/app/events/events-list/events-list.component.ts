import { Component, OnInit } from '@angular/core';
import { Event } from "../models/event";
import { EventsService } from "../services/events.service";


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  constructor(private _eventsService: EventsService) {

  }

  title: string = "Synechron Future Events List";
  subTitle: string = "Published by Synechron HR!";
  events: Event[] = [];

  ngOnInit(): void {
    this._eventsService.getAllEvents().subscribe(
      data => this.events = data,
      err => console.log(err),
      () => console.log("Service call is completed!")
    );
  }
}
