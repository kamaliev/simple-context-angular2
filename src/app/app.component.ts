import {Component, ViewChild} from '@angular/core';
import {SimpleContextComponent} from "./simple-context/simple-context.component";
import {SimpleContext} from "./simple-context/simple-context";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private _simpleContext;

    @ViewChild(SimpleContextComponent)
    set simpleContext(v: SimpleContextComponent) {
        v.setItems(this.items);
        this._simpleContext = v;
    }

    get simpleContext() {
        return this._simpleContext;
    }

    items: Array<SimpleContext>;
    groups: Array<any>;

    constructor() {
        this.items = [
            {
                title: 'Save',
                event: this.onSave
            },
            {
                title: 'Edit',
                event: this.onSave
            }
        ];

        this.groups = [
            {
                id: 1,
                title: 'Anton'
            },
            {
                id: 2,
                title: 'Stellarbit'
            }
        ];
    }

    onSave(e) {
        console.log('onSave', e);
    }

    onEdit(e) {
        console.log('onEdit', e);
    }
}
