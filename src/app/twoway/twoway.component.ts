import { Component, OnInit } from '@angular/core';
import { debug } from 'util';
@Component({
    selector: 'app-twoway',
    templateUrl: './twoway.component.html',
    styleUrls: ['./twoway.component.scss']
})
export class TwowayComponent implements OnInit {
    public message = '';
    public messages: string[] = [];

    constructor() {
        this.messages.push('vinh');
    }

    ngOnInit() {}
    onClick() {
        this.messages.push(this.message);
    }
    onKeyUp(e) {
        console.log(e);
    }
}
