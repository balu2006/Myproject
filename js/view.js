
var sview = Backbone.View.extend({

	el: "#main-body",
	template: $("#signin").html(),
	
	render: function () {
		var tmpl = _.template(this.template);	
		$(this.el).html(tmpl);	
		return this;	
	}

});
 
 
