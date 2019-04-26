import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import{EmployeesModule} from "./employees/employees.module";
import{EventsModule} from "./events/events.module";
import{HomeModule} from "./home/home.module";
import{NavigationModule} from "./navigation/navigation.module";
import { EmployesListComponent } from './employees/employee-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDeailsComponent } from './events/event-deails/event-deails.component';
import { FilterbyPipe } from './events/pipes/filterby.pipe';
import { SepMenuComponent } from './navigation/sep-menu/sep-menu.component';
import { SepHomeComponent } from './home/sep-home/sep-home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,EmployeesModule,NavigationModule,HomeModule,EventsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
