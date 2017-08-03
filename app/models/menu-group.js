import DS from 'ember-data';

export default DS.Model.extend({
  menuGroupItems: DS.hasMany('menu-group-item'),
  name: DS.attr('string'),
  position: DS.attr('number')
});
