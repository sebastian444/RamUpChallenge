define([
	'jquery',
	'jqueryspin',
	'spin',
	'loaders',
	'underscore', 
	'backbone',
	'models/photoModel',
	], function($, Spinner, Spin, Loaders, _, Backbone, PhotoModel){
		var PhotoCollection = Backbone.Collection.extend({
			model: PhotoModel,

			initialize: function(query) {
				this.queryItem = query;
				showLoading();
			},
			
			url: function() {
				return 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1d7ef89e3994ccfaf1f0932b8254fd18&sort=relevance&extras=url_m&privacy_filter=1&content_type=1&per_page=30&format=json&nojsoncallback=1&text=' + this.queryItem;
			}
		});
		
		return PhotoCollection;
	});