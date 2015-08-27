define([
  'jquery',
  'underscore',  
  'backbone', 
  'handlebars',
  'lib/handlebars/helpers',
  'text!templatePath/itemTemplate.html'
  ], function($, _, Backbone, Handlebars, Helpers, itemTemplate){
      var ItemView = Backbone.View.extend({
        el:$('#master'),

        events: {
          "click .item":  "itemClick",
          "click .close": "close"
        },

        itemClick: function(e){  
          e.stopPropagation();      
          $(e.currentTarget).addClass('active');        
        },

        close: function(e) {
          e.stopPropagation();
          $(e.currentTarget).parent().removeClass('active');
        },

        colourData: function (params) {
            this.colour = params;
            console.log(this.colour);
        },

        photoData: function (params) {
          this.photo = params;
          console.log(this.photo);
          this.render();
        },

        initialize: function () {
          
        },

        render: function(response){  
          var datosCompilados = {color: this.colour, foto: this.photo, extra: "3"};
          console.log(datosCompilados);
          var template = Handlebars.compile(itemTemplate);
          return this.$el.html(template(datosCompilados));    
        }      
    });
    
    return ItemView;
  });