App.PeopleRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Person.find());
    console.log("people route!");
  }
});