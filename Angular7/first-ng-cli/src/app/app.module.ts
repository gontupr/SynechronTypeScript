import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployesListComponent } from './employees/employee-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDeailsComponent } from './events/event-deails/event-deails.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesListComponent,
    EmployeeDetailsComponent,
    EventsListComponent,
    EventDeailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
