import {Component, ViewChild} from '@angular/core';
import {SimpleContextComponent} from './simple-context/simple-context.component';
import {SimpleContext} from './simple-context/simple-context';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private _simpleContext;

    @ViewChild(SimpleContextComponent)
    set simpleContext(v: SimpleContextComponent) {
        v.setItems(this.menuItems);
        this._simpleContext = v;
    }

    get simpleContext() {
        return this._simpleContext;
    }

    menuItems: Array<SimpleContext>;
    groups: Array<any>;

    constructor() {
        this.menuItems = [
            { title: 'Save', event: this.onSave },
            { title: 'Edit', event: this.onSave }
        ];

        this.groups = [
            { id: 1, title: 'Bill' },
            { id: 2, title: 'Murray' }
        ];
    }

    onSave(item) {
        console.log('onSave', item);
    }

    onEdit(item) {
        console.log('onEdit', item);
    }
}
