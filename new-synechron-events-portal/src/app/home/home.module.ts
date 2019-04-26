import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from './home-routing.module';
import { SepHomeComponent } from "./sep-home/sep-home.component";

@NgModule({
    imports: [CommonModule, HomeRoutingModule],
    exports: [SepHomeComponent],
    declarations: [SepHomeComponent]
})
export class HomeModule { }
