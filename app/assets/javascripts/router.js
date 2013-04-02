App.Router.reopen({
  location: "history"
});

App.Router.map(function() {
  this.resource('people');
  this.route('person', {path: '/person/:person_id'});

});
