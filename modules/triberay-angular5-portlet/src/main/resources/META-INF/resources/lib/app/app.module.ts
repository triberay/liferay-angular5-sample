import {ApplicationRef, ComponentFactoryResolver, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

export default (portletNamespace: string) => {
    @NgModule({
        imports: [
            BrowserModule,
            FormsModule
        ],
        declarations: [AppComponent],
        entryComponents: [AppComponent],
        bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
        providers: [],
    })

    class AppModule {
        constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        }

        ngDoBootstrap(applicationRef: ApplicationRef) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AppComponent);
            let element: Element = document.getElementById(portletNamespace);
            applicationRef.bootstrap(componentFactory, element);
        }
    }

    return AppModule;
};
