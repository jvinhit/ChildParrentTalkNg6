import {
    Component,
    Injectable,
    ReflectiveInjector,
    Inject,
    InjectionToken,
    Directive,
    ElementRef,
    Renderer,
    ViewEncapsulation,
    HostListener,
    HostBinding
} from '@angular/core';
import { API_URL } from './id-generator.providers';
export class OtherService {
    constructor() {}
    desc() {
        console.log('Other Svc called!');
    }
}
@Injectable()
export class SimpleService {
    otherService: OtherService;
    value: string;
    constructor(otherService: OtherService, @Inject(API_URL) api: string) {
        this.otherService = otherService;
        console.log(` api :::: ${api}`);
    }
    desc() {
        console.log('Simple Svc called!');
    }
}
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '.ccCardHover'
})
export class CustomDirective {
    // tslint:disable-next-line:no-inferrable-types
    @HostBinding('style.color') color: string;
    @HostBinding('style.border-color') borderColor: string;
    constructor(private el: ElementRef, private renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'color', 'red');
    }
    @HostListener('mouseover')
    onHover() {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');
    }
    @HostListener('mouseout')
    onOutHover() {
        this.color = this.borderColor = 'yellow';
        this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ParrentChild';
    passMessage = 'Pass Message Content';
    constructor(private simpleService: SimpleService, @Inject(API_URL) private apiurl: string) {
        this.test();
        console.log(this.apiurl);
    }
    test() {
        this.simpleService.desc();
        this.simpleService.otherService.desc();
    }
}
