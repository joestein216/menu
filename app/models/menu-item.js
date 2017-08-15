import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  componentName: Ember.computed(function () {
    let menuItemType = this.constructor.modelName;

    return `${menuItemType}`;
  }),
  displayPrice: DS.attr('string'),
  menuGroupItems: DS.hasMany('menu-group-item'),
  name: DS.attr('string'),
  type: DS.attr('string')
});
