import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParrentComponent } from './parrent/parrent.component';
import { ChildComponent } from './child/child.component';
import { SwitchesComponent } from './switches/switches.component';
import { TwowayComponent } from './twoway/twoway.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { GroupContentComponent } from './group-content/group-content.component';

@NgModule({
    declarations: [AppComponent, ParrentComponent, ChildComponent, SwitchesComponent, TwowayComponent, TemplateVariableComponent, ContentProjectionComponent, GroupContentComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
