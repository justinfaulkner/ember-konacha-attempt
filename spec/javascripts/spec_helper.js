//= require konacha_config
//= require sinon
//= require application

// Prevent the router from manipulating the browser's URL.
App.Router.reopen({location: 'none'});

//**** Global before / after ***

// Sinon fake server
var server;
var router;

// Stub out Konacha.reset()
Konacha.reset = Ember.K;

beforeEach(function(done) {
  // Fake XHR
  server = sinon.fakeServer.create();

  // Prevent automatic scheduling of runloops. For tests, we
  // want to have complete control of runloops.
  Ember.testing = true;

  Ember.run(function() {
    // Advance App readiness, which was deferred when the app
    // was created.
    //
    // This needs to be done here, after each iframe has been setup,
    // instead of in a global `before`.
    App.advanceReadiness();

    // When App readiness promise resolves, setup is complete
    App.then(function() {
      done();
    });
    router = App.Router.create();
    App.initialize(router);
  });
});

afterEach(function() {
  // Reset App
//  Ember.run(function() {
//    App.reset();
//  });

  // Restore XHR
  server.restore();
});
