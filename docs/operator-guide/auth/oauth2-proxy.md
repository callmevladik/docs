import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tekton Dashboard Authentication

[OAuth2-Proxy](https://oauth2-proxy.github.io/oauth2-proxy/) is a versatile tool that serves as a reverse proxy, utilizing the OAuth 2.0 protocol with various providers like Google, GitHub, and Keycloak to provide both authentication and authorization. This guide instructs readers on how to protect their applications' endpoints using OAuth2-Proxy. By following these steps, users can enhance the security of their endpoints without modifying their current application code. In the context of KubeRocketCI, it has integration with the Keycloak OIDC provider, enabling it to connect with any component that lacks built-in authentication.

  :::note
    OAuth2-Proxy is disabled by default when installing EDP.
  :::

## Prerequisites

* [Keycloak](keycloak.md) with OIDC authentication is installed.
* [Keycloak operator](../add-ons-overview.md) is installed.

## Enable OAuth2-Proxy

Enabling OAuth2-Proxy implies the following general steps:

1. Update your EDP deployment using command `--set 'sso.enabled=true'` **or** the `--values` file by enabling the sso parameter.
2. Check that OAuth2-Proxy is deployed successfully.
3. Enable authentication for your Ingress by adding `auth-signin` and `auth-url` of OAuth2-Proxy to its annotation.

This will deploy and connect OAuth2-Proxy to your application endpoint.

## Enable OAuth2-Proxy on Tekton Dashboard

The example below illustrates how to use OAuth2-Proxy in practice when using the Tekton dashboard:

    <Tabs
      defaultValue="kubernetes"
      values={[
        {label: 'Kubernetes', value: 'kubernetes'},
        {label: 'Openshift', value: 'openshift'}
      ]}>

      <TabItem value="kubernetes">
          1. Run `helm upgrade` to update edp-install release:

          ```bash
          helm upgrade --version <version> --set 'sso.enabled=true' edp-install --namespace edp
          ```

          2. Check that OAuth2-Proxy is deployed successfully.

          3. Edit the Tekton dashboard Ingress annotation by adding `auth-signin` and `auth-url` of oauth2-proxy by `kubectl` command:

          ```bash
          kubectl annotate ingress <application-ingress-name> \
          nginx.ingress.kubernetes.io/auth-signin='https://<oauth-ingress-host>/oauth2/start?rd=https://$host$request_uri' \
          nginx.ingress.kubernetes.io/auth-url='http://oauth2-proxy.edp.svc.cluster.local:8080/oauth2/auth'
          ```
      </TabItem>

      <TabItem value="openshift">
          1. Generate a cookie-secret for proxy with the following command:

          ```bash
          tekton_dashboard_cookie_secret=$(openssl rand -base64 32 | head -c 32)
          ```

          2. Create `tekton-dashboard-proxy-cookie-secret` in the edp namespace:

          ```bash
          kubectl -n edp create secret generic tekton-dashboard-proxy-cookie-secret \
            --from-literal=cookie-secret=${tekton_dashboard_cookie_secret}
          ```
          3. Run `helm upgrade` to update edp-install release:

          ```bash
          helm upgrade --version <version> --set 'edp-tekton.dashboard.openshift_proxy.enabled=true' edp-install --namespace edp
          ```
      </TabItem>
    </Tabs>

## Related Articles

* [Keycloak Installation](keycloak.md)
* [Keycloak OIDC Installation](configure-keycloak-oidc-eks.md)
* [Tekton Installation](../install-tekton.md)
