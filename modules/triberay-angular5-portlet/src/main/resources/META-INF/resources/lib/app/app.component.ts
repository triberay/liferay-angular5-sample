import {Component} from '@angular/core';
import {Hero} from "../model/hero";

@Component({
    templateUrl: '/o/triberay-angular5-portlet/lib/app/app.html'
})
export class AppComponent {
    constructor() {}

    title = 'Hello World!';
    hero: Hero = {
        id: 1,
        name: 'Superman'
    };
}
