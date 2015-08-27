define([
	'handlebars'
	], function (Handlebars) {
	  	Handlebars.registerHelper('buildImageUrl', function(obj, field) {
		  return obj[field].url_m;
		});	
	});