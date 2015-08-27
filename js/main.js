'use strict';

require.config({
    urlArgs: 'bust=v'+(new Date()).getTime(),
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: 'lib/jquery/jquery-1.9.1.min',
        jqueryspin: 'lib/spin/jquery.spin',
        spin: 'lib/spin/spin',
        loaders: 'lib/spin/loaders',
        backbone: 'lib/backbone/backbone-min',
        underscore: 'lib/backbone/underscore-1.8.3',
        handlebars: 'lib/handlebars/handlebars-v3.0.3',
        text: 'lib/require/text',
        templatePath: '../templates'
    }
});

require(['views/appView'], function(AppView){ 
    var appView = new AppView;
});
