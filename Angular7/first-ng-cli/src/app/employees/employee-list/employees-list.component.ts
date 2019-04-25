import {Component} from "@angular/core"
import{ Employee } from "../models/employee"

@Component({
    selector:'employees-list',
    templateUrl:"./employees-list.component.html",
    styleUrls:['./employees-list.component.css']
})
export class EmployesListComponent
{
    constructor()
    {

    }
title: string = "Synechron Employees List";
subTitle: string = "Hyderabad Emp";
selectedEmployee: Employee;
onEventSelection(employee: Employee):void{
    this.selectedEmployee = employee;
    console.log(this.selectedEmployee);
}
employees: Employee[] = [
    {
        employeeId: 100,
        employeeName: "Manish Kaushik",
        address: "East Wing, F-9090,Moon City",
        city: "Raipur",
        country: "India",
        phone: "+91 23892383",
        email: "manish.kaushik@synechron.com",
        platform: "Database",
        skillSets: "DBA",
        avatar: "images/noimage.png"
    },
    {
        employeeId: 101,
        employeeName: "Alisha C.",
        address: "D Wing, F-5090,Green City",
        city: "Pune",
        country: "India",
        phone: "+91 7867565",
        email: "alisha.c@synechron.com",
        platform: "Java Full Stack",
        skillSets: "Java, Spring, Hybernet",
        avatar: "images/noimage.png"
    },
    {
        employeeId: 102,
        employeeName: "Ali Abbas",
        address: "F-Wing, J-8976,Yellow City",
        city: "Mumbai",
        country: "India",
        phone: "+91 34894894",
        email: "ali.abbas@synechron.com",
        platform: "Database",
        skillSets: "Developer - SQL/Oracle/MongoDB",
        avatar: "images/noimage.png"
    },
    {
        employeeId: 103,
        employeeName: "Anjala Johns",
        address: "North Wing, J-33,Moon City",
        city: "London",
        country: "U.K.",
        phone: "+234 23672383",
        email: "anjala.johns@synechron.com",
        platform: "Open Source",
        skillSets: "JavaScript Full Stack",
        avatar: "images/noimage.png"
    },
    {
        employeeId: 104,
        employeeName: "Pravinkumar R. D.",
        address: "North Wing, F-9090,Suncity City",
        city: "Pune",
        country: "India",
        phone: "+91 78989898",
        email: "pravinkumar.r.d@synechron.com",
        platform: "Microsoft/Open Source",
        skillSets: "DBA",
        avatar: "images/noimage.png"
    }
];
}