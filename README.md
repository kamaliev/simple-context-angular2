## About

This is simple context menu to Angular 2+

## Npm install

```sh
npm install simple-context-angular2 --save
```

## How to use

1) Import module

```typescript

import {SimpleContextModule} from 'simple-context-angular2';

@NgModule({
    ...
    imports: [
        ...
        SimpleContextModule
    ],
    ...
})
```

2. Edit your template

```html
<ul>
  <li *ngFor="let group of groups"
      [simple-context]="simpleContext"
      [simple-context-payload]="group">
    {{group.title}}
  </li>
</ul>

<simple-context></simple-context>
```

3. Edit your component

```typescript
import {Component, ViewChild} from '@angular/core';
import {SimpleContextComponent, SimpleContext} from 'simple-context-angular2';

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
            { title: 'Save', event: item => this.onSave(item) },
            { title: 'Edit', event: item => this.onSave(item) }
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

```

## Test

1. Clone this git
2. npm install & npm start
3. Open http://localhost:4200