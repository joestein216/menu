import DS from 'ember-data';
import MenuItem from './menu-item';

export default MenuItem.extend({
  numberOfItems: DS.attr('number'),
  package: DS.belongsTo('package')
});
