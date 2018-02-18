package com.triberay.angular5.sample.portlet;

import com.triberay.angular5.sample.constants.TriberayAngular5PortletKeys;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;
import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.osgi.service.component.annotations.Component;

import java.io.IOException;

/**
 * @author Wouter Vernaillen
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=Triberay",
		"com.liferay.portlet.instanceable=true",
        "com.liferay.portlet.single-page-application=false",
		"javax.portlet.display-name=Triberay Angular 5 Sample Portlet",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + TriberayAngular5PortletKeys.TriberayAngular5,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class TriberayAngular5Portlet extends MVCPortlet {

    @Override
    public void doView(
            RenderRequest renderRequest, RenderResponse renderResponse)
            throws IOException, PortletException {

        super.doView(renderRequest,renderResponse);
    }
}