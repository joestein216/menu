import DS from 'ember-data';

export default DS.Model.extend({
  menuGroup: DS.belongsTo('menu-group'),
  menuItem: DS.belongsTo('menu-item', {polymorphic: true}),
  position: DS.attr('number')
});
