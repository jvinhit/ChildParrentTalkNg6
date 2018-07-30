import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-content-projection',
    templateUrl: './content-projection.component.html',
    styleUrls: ['./content-projection.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContentProjectionComponent implements OnInit {
    @Input() message: 'Example content projection!!!';
    @Input() selected: boolean;
    constructor() {}

    ngOnInit() {}
    toggleSelected() {
        this.selected = !this.selected;
    }
}
