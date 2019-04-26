import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import{ SepHomeComponent } from "./sep-home/sep-home.component"
import { from } from 'rxjs';

@NgModule({
    imports: [CommonModule],
    exports: [SepHomeComponent],
    declarations: [SepHomeComponent],
    providers: [],
})
export class HomeModule { }
