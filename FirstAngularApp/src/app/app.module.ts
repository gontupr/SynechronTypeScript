import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {AppComponent} from "./app.component"
import { from } from "rxjs";

@NgModule({
    imports:[BrowserModule],
    exports:[],
    declarations:[AppComponent],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule
{

}