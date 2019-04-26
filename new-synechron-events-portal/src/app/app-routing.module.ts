import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const defaultRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

const eventRoutes: Routes = [
  {
    path: 'events',
    loadChildren: './events/events.module#EventsModule'
  }
];

const employeeRoutes: Routes = [
  {
    path: 'employees',
    loadChildren: './employees/employees.module#EmployeesModule'
  }
];

const homeRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  }
];

const routes: Routes = [
  ...homeRoutes,
  ...employeeRoutes,
  ...eventRoutes,
  ...defaultRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
