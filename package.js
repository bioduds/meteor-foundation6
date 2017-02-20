Package.describe({
  name: 'bioduds:foundation6',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Foundation 6 Complete Version 6.3.0',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bioduds/meteor-foundation6.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jquery', ['client']);
  api.addFiles([
    'js/app.js',
    'js/vendor/foundation.js',
    'js/vendor/foundation.min.js',
    'js/vendor/jquery.js',
    'js/vendor/what-input.js',
    'css/app.css',
    'css/foundation.css',
    'css/foundation.min.css',
  ],['client']);
  api.addAssets([
    'index.html'
  ], ['client']);
});

