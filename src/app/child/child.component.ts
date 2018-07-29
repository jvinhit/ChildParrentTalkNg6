import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
    // Using Decorator input de nhan tham so dau vao
    @Input() avatarURL = '';
    //@Input() rounded = false;
    // using alias
    // tslint:disable-next-line:no-input-rename
    @Input('round-eds') rounded = false;

    constructor() {}

    ngOnInit() {}

    // get rounded() {
    //     return this._rounded;
    // }
    // set rounded(value: boolean) {
    //     this._rounded = value;
    // }
}
