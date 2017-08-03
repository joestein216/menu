import DS from 'ember-data';
import MenuItem from './menu-item';

export default MenuItem.extend({
  package: DS.belongsTo('package')
});
