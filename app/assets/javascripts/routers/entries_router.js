Raffler.Routers.Entries = Backbone.Router.extend({
	routes: {
		'':'index'
	},
	index: function() {
		alert("hello from router");
	}
});
