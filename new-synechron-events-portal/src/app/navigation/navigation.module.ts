import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SepMenuComponent } from "./sep-menu/sep-menu.component";
import { RouterModule } from '@angular/router';
import { SepFooterComponent } from './sep-footer/sep-footer.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [SepMenuComponent, SepFooterComponent],
    declarations: [SepMenuComponent, SepFooterComponent]
})
export class NavigationModule { }
