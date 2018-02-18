import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import getAppModule from './app/app.module';
import PortalUtil from "./app/portal-util";
import {NgModuleRef} from "@angular/core";

export default (portletNamespace: string) => {
    let appModule: any;
    let portletName: string = PortalUtil.getPortletName(portletNamespace);
    switch (portletName) {
        case 'TriberayAngular5':
            appModule = getAppModule(portletNamespace);
            break;
        default:
            console.log(`Invalid portlet name: ${portletName}`)
    }

    platformBrowserDynamic()
        .bootstrapModule(appModule)
        .then((moduleRef: NgModuleRef<any>) => {
            console.log(`Bootstraping for portlet namespace: ${portletNamespace}`);
        });
}
