import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SepHomeComponent } from './sep-home/sep-home.component';

const routes: Routes = [
    {
        path: '',
        component: SepHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }