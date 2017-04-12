import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {SimpleContext} from './simple-context';

@Component({
    selector: 'simple-context',
    template: `
      <div #context class="context">
        <ul>
          <li *ngFor='let item of items'>
            <span (click)='item.event(payload)'>{{item.title}}</span>
          </li>
        </ul>
      </div>
    `,
    styles: [`
        .context {
            display: none;
            position: absolute;
            background-color: #fff;
            -webkit-box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.4);
            -moz-box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.4);
            box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.4);
            z-index: 999;
        }

        .context ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        .context ul li {
            cursor: pointer;
            transition: all 1s;
        }

        .context ul li span {
            display: block;
            padding: 5px 30px;
        }

        .context ul li:hover {
            background-color: rgba(205, 205, 205, 0.90);
            transition: all 1s;
        }
    `]
})
export class SimpleContextComponent implements OnInit {
    @ViewChild('context') context: ElementRef;

    private items: Array<SimpleContext>;
    payload: any;

    get document() {
        return document;
    }

    constructor() {
        Observable.fromEvent(document, 'click')
            .delay(1)
            .subscribe((e: any) => {
                const target = this.context.nativeElement;
                e.target.closest = function (css) {
                    let node = this;

                    while (node) {
                        if (node.matches(css)) {
                            return node;
                        } else {
                            node = node.parentElement;
                        }
                    }
                    return null;
                };

                // if (e.target.closest('div') !== target) {
                target.style.display = 'none';
                // }
            });
    }

    setItems(items: Array<SimpleContext>) {
        this.items = items;
    }

    showContext({top, left, payload}) {
        this.payload = payload;
        this.context.nativeElement.style.display = 'block';
        this.context.nativeElement.style.top = top + 'px';
        this.context.nativeElement.style.left = left + 'px';
    }

    ngOnInit() {
    }

}
