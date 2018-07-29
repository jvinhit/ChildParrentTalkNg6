import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SwitchesComponent } from '../switches/switches.component';

@Component({
    selector: 'app-template-variable',
    templateUrl: './template-variable.component.html',
    styleUrls: ['./template-variable.component.scss']
})
export class TemplateVariableComponent implements OnInit {
    message: string;
    constructor() {}
    @ViewChild('username') name: ElementRef; // Native element
    @ViewChild('switches') swithes: SwitchesComponent;

    ngOnInit() {}
    onClick(value: string) {
        this.message = this.name.nativeElement.value;
        this.swithes.toggle();
    }
}
