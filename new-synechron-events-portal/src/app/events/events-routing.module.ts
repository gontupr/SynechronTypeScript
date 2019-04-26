import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventResolver } from './resolvers/event.resolver';

const routes: Routes = [
    {
        path: '',
        component: EventsListComponent
    },
    {
        path: 'new',
        component: EventsListComponent
    },
    {
        path: ':id',
        component: EventDetailsComponent,
        resolve: {
            event: EventResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }