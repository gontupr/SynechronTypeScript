import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
    imports: [CommonModule, EmployeesRoutingModule],
    exports: [EmployeesListComponent],
    declarations: [EmployeesListComponent,EmployeeDetailsComponent]
})
export class EmployeesModule { }
