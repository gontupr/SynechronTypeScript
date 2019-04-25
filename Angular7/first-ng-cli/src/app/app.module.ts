import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployesListComponent } from './employees/employee-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
