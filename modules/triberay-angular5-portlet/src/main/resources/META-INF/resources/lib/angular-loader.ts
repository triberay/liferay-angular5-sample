// Import needed polyfills before application is launched
import 'reflect-metadata';
import 'zone.js';

// Declare Liferay AMD loader
declare var Liferay: any;

// Launch application
export default function(portletNamespace: string) {

    Liferay.Loader.require(
        'triberay-angular5-portlet@1.0.0/lib/main',
        (main: any) => {
            main.default(portletNamespace);
        },
    );
}
