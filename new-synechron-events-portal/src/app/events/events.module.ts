import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { EventsRoutingModule } from './events-routing.module';
import { FilterbyPipe } from "./pipes/filterby.pipe";
import { EventResolver } from './resolvers/event.resolver';
import { EventsService } from "./services/events.service";




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        EventsRoutingModule
    ],
    exports: [EventsListComponent],
    declarations: [
        EventsListComponent,
        EventDetailsComponent,
        FilterbyPipe
    ],
    providers: [
        EventsService,
        EventResolver
    ],
})
export class EventsModule { }
