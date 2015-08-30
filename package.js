Package.describe({
  name: 'gfk:mediator',
  version: '1.0.0',
  summary: 'Adds a mediator to your application',
  git: 'https://github.com/gfk-ba/meteor-mediator/',
  documentation: 'README.md'
});

Npm.depends({
  'mediator-js': '0.9.8'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('cosmos:browserify@0.5.0', 'client');
  api.addFiles('client.browserify.js');
  api.export('Mediator');
});
