import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDeailsComponent } from './event-deails/event-deails.component';
import { FilterbyPipe } from './pipes/filterby.pipe';
import { EventsService } from './services/events.service';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,FormsModule,HttpClientModule],
    exports: [EventsListComponent],
    declarations: [
        EventsListComponent,
        EventDeailsComponent,
        FilterbyPipe
    ],
    providers: [EventsService],
})
export class EventsModule { }
