import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `,
})
export class AppComponent {
    constructor() {}

    title = 'Welcome!';
    /*hero: Hero;
    public ngOnInit() {
        this.portletHeroLoader.getHero().subscribe((hero: Hero) => this.hero);
    }*/

    hero: Hero = {
        id: 1,
        name: 'Angular 5 Sample',
    };
}
