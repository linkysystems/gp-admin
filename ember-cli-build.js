'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-power-select': {
      theme: 'bootstrap'
    },

    'ember-font-awesome': {
      includeComponent: false
    },

    fingerprint: {
       exclude: ['tiny-mce-languages/**'],
    },

    flatpickr: {
      locales: ['pt']
    },
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/jquery.tabledrag/jquery.tabledrag.js');
  app.import('vendor/jquery.tabledrag/jquery.tabledrag.css');

  return app.toTree();
};
