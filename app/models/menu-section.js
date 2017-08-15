import DS from 'ember-data';

export default DS.Model.extend({
  menuGroups: DS.hasMany('menu-group'),
  name: DS.attr('string')
});
