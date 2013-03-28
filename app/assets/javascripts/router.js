App.Router.reopen({
  location: "history"
});

App.Router.map(function() {
  this.route("/");
  this.route("two");
});
