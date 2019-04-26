import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EventResolver implements Resolve<Event> {
    constructor(private _eventsService: EventsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> {
        return this._eventsService.getEvent(route.params['id'])
            .pipe(catchError((err) => {
                alert('Failed to fetch event details. Please try again after sometime.');
                throw err;
            }));
    }
}