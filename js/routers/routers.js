define([
  'jquery',    
  'jqueryspin',
  'spin',
  'loaders',
  'underscore',
  'backbone',
  'collections/photoCollection',
  'collections/colourCollection',
  'views/itemView'
  ], function($, Spinner, Spin, Loaders, _, Backbone, PhotoCollection, ColourCollection, ItemView){
    var AppRouter = Backbone.Router.extend({
      routes: {
        '*actions/:query': 'searchQuery'
      },

      searchQuery: function(action, query){
        photoCollection = new PhotoCollection(query);
        colourCollection = new ColourCollection(query);

        colourCollection.fetch({
          success: function(model, response) {
            respuesta = {
              item: response
            }

            itemView.colourData(respuesta); 

            photoCollection.fetch({
              success: function(model, response) {
                itemView.photoData(response); 
                hideLoading();
              }
            }); 
          }
        });    
      }
    });

    var initialize = function(){
        appRouter = new AppRouter;
        itemView = new ItemView;
        Backbone.history.start();
    };

    return {
      initialize: initialize
    };
});