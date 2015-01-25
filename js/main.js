
// current test case that is being created or editied
 



var AppRouter = Backbone.Router.extend({
	change: true,
	routes : {
		"sign" : "csignin",
		
	},
	csignin : function(){
 
		var signin = new  sview();
		
		signin.render();
		 
	}
	
});

var App = new AppRouter();


Backbone.history.start();

 
 