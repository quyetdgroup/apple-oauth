Package.describe({
    name: 'designveloper:apple-oauth',
    version: '3.0.0',
    summary: 'Sign in with Apple OAuth flow - fork from quavedev',
    git: 'https://github.com/quyetdgroup/apple-oauth',
});

Package.onUse(function(api) {
    api.versionsFrom(['1.9', '2.3'])
    api.use('ecmascript');
    api.use('base64');
    api.use('accounts-base', ['client', 'server']);
    api.use('oauth2', ['client', 'server']);
    api.use('oauth', ['client', 'server']);
    api.use('http', ['server']);
    api.use(['service-configuration'], ['client', 'server']);
    api.use(['random'], 'client');

    api.addFiles('apple_server.js', 'server');
    api.addFiles('apple_client.js', 'client');

    api.mainModule('namespace.js');

    api.export('Apple');
});

Npm.depends({
    'jsonwebtoken': '8.5.1',
    'jwks-rsa': '1.6.0',
    'semver-lite': '0.0.6'
});

Cordova.depends({
    'cordova-plugin-sign-in-with-apple': '0.1.1',
    'cordova-plugin-device': '2.0.3'
});
