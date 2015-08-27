define([
	'jquery',  
	'jqueryspin',
	'spin',
	'loaders',
	'underscore', 
	'backbone',
	'models/colourModel',
	], function($, Spinner, Spin, Loaders, _, Backbone, ColourModel){
		var ColourCollection = Backbone.Collection.extend({
			model: ColourModel,

			initialize: function(query) {				
				this.queryItem = query;
				showLoading();	
			},
			
			url: function() {
				return 'http://www.colourlovers.com/api/palettes/top?jsonCallback=?&numResults=30&keywords=' + this.queryItem;
			}
		});
		
		return ColourCollection;
	});