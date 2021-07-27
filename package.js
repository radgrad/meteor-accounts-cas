Package.describe({
  summary: "CAS support for accounts",
  version: "0.0.2",
  name: "cammoo:accounts-cas",
  git: "https://github.com/radgrad/meteor-accounts-cas"
});

Package.onUse(function(api) {
  api.versionsFrom('2.3.2');
  api.use('routepolicy', 'server');
  api.use('webapp', 'server');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('underscore');
  api.mainModule('cas_client.js', 'web.browser');
  api.mainModule('cas_client_cordova.js', 'web.cordova');
  api.mainModule('cas_server.js', 'server');
});

Npm.depends({
  xml2js: "0.4.17",
  cas: "https://github.com/anrizal/node-cas/tarball/2baed530842e7a437f8f71b9346bcac8e84773cc"
});

Cordova.depends({
  'cordova-plugin-inappbrowser': '1.2.0'
});
