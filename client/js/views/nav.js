/*
 * client/js/views/nav.js
 */

/* global define */

define([
  'jquery',
  'backbone',
  'hbs!templates/nav'
], function ($, Backbone, navTpl) {
  'use strict';

  return Backbone.Marionette.Layout.extend({
    template: navTpl,

    serializeData: function () {
      var data = {};

      if (this.model) {
        data = this.model.toJSON();
      } else if (this.collection) {
        data = {
          items: this.collection.toJSON()
        };
      }

      if ($.cookie('user.name.full')) {
        data.user = {
          name: {
            full: $.cookie('user.name.full')
          }
        };
      }

      return data;
    }
  });
});
