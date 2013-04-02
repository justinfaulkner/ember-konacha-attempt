App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.RESTAdapter'
});

DS.RESTAdapter.reopen({
  namespace: 'api'
});