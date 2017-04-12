import {Directive, HostListener, Input} from '@angular/core';
import {SimpleContextComponent} from './simple-context.component';

@Directive({
    selector: '[simple-context]'
})
export class SimpleContextDirective {
    @Input('simple-context') simpleContext: SimpleContextComponent;
    @Input('simple-context-payload') simpleContextPayload: any;

    @HostListener('contextmenu', ['$event']) contextMenuEvent(e: MouseEvent) {
        e.preventDefault();
        this.simpleContext.showContext({
            top: e.clientY,
            left: e.clientX,
            payload: this.simpleContextPayload
        });
    }

    constructor() {
    }
}
