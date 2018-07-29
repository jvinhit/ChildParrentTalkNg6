import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-switches',
    templateUrl: './switches.component.html',
    styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {
    @Input() checked: boolean;
    @Output() change = new EventEmitter<boolean>();
    constructor() {}

    ngOnInit() {
        console.log(` __: ${this.checked}`);
    }
    emitChangeValue(event: any) {
        event.stopPropagation();
        console.log(event.target.checked);
        this.change.emit(event.target.checked);
    }
}
