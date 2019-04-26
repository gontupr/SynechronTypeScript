import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EmployesListComponent } from './employee-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


@NgModule({
    imports: [CommonModule],
    exports: [EmployesListComponent],
    declarations: [EmployeeDetailsComponent,EmployesListComponent],
    providers: [],
})
export class EmployeesModule { }
