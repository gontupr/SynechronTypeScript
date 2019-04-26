import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from "../models/event";
import { EventsService } from '../services/events.service';


@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _eventsService: EventsService) {

  }
  title: string = "Details of  - ";
  event: Event;

  ngOnInit() {
    // const eventId = this._route.snapshot.params['id'];
    // this._eventsService.getEvent(+eventId).subscribe(
    //   event => this.event = event,
    //   err => console.log(err),
    //   () => console.log('Service call completed!!')
    //   );

    this.event = this._route.snapshot.data['event'];
  }

}
