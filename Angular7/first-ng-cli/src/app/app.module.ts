import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployesListComponent } from './employees/employee-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDeailsComponent } from './events/event-deails/event-deails.component';
import { FilterbyPipe } from './events/pipes/filterby.pipe';
import { SepMenuComponent } from './navigation/sep-menu/sep-menu.component';
import { SepHomeComponent } from './home/sep-home/sep-home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesListComponent,
    EmployeeDetailsComponent,
    EventsListComponent,
    EventDeailsComponent,
    FilterbyPipe,
    SepMenuComponent,
    SepHomeComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
