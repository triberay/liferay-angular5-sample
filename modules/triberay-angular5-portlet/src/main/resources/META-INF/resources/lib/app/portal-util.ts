declare var Liferay: any;

export default class PortalUtil {
    static doSomething(val: string) { return val; }
    static doSomethingElse(val: string) { return val; }

    static getPortletConfigurationUrl(portletNamespace: string) {
        let language: string = navigator.language;
        let portletId: string = PortalUtil.getPortletId(portletNamespace);
        let resourceURL = Liferay.PortletURL.createResourceURL();
        resourceURL.setPortletId(portletId);
        resourceURL.setResourceId('/portlet-configuration');
        return resourceURL.toString();
    }

    static getPortletId(portletNamespace: string) {
        return portletNamespace.replace(/^_+|_+$/g, '');
    }

    static getPortletName(portletNamespace: string) {
        let portletId = PortalUtil.getPortletId(portletNamespace);
        return portletId.replace(/_INSTANCE_\w+$/g, '');
    }
}