import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleContextComponent} from './simple-context.component';
import {SimpleContextDirective} from './simple-context.directive';


@NgModule({
    imports: [CommonModule],
    declarations: [
        SimpleContextComponent,
        SimpleContextDirective
    ],
    exports: [SimpleContextComponent, SimpleContextDirective]
})
export class SimpleContextModule {
}
