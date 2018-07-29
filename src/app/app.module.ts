import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParrentComponent } from './parrent/parrent.component';
import { ChildComponent } from './child/child.component';
import { SwitchesComponent } from './switches/switches.component';

@NgModule({
    declarations: [AppComponent, ParrentComponent, ChildComponent, SwitchesComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
