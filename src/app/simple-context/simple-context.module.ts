import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleContextComponent} from './simple-context.component';
import {SimpleContextDirective} from './simple-context.directive';


@NgModule({
    imports: [CommonModule],
    declarations: [
        SimpleContextComponent,
        SimpleContextDirective
    ],
    exports: [SimpleContextComponent, SimpleContextDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SimpleContextModule {
}
