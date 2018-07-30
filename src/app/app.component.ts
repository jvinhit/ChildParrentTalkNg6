import { Component, Injectable, ReflectiveInjector } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ParrentChild';
    passMessage = 'Pass Message Content';
    constructor() {}
    test() {}
}
