window.Raffler = {  // rails g backbone:install --javascript to generate this rather than coffeescript
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  Raffler.initialize();
});
