define([
  'jquery',
  'underscore', 
  'backbone',
  'handlebars',   
  'routers/routers',
  ], function($, _, Backbone, Handlebars, Router){
      var AppView = Backbone.View.extend({
          el: $('#app'),

          query: '',
          
          events: {
              'keypress #search': 'search'
          },

          search: function(e){
            if (e.keyCode != 13) return;
            this.query = searchInput.val();
            if (!this.query) return;
            appRouter.navigate('searchResults/' + this.query, true);
          },

          initialize: function() {          
            searchInput = this.$('#search');
            Router.initialize();
          }
      });

      return AppView;
  });


 