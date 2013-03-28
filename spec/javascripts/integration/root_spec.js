//= require spec_helper

describe("the root page", function() {
  it("has a 2 when you switch to the two route", function() {
    Ember.run(function() {
      router.transitionTo('two');
      $('h1.huge')[0].innerHTML.should.equal("2");
    });
  });
});
