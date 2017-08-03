import DS from 'ember-data';
import MenuItem from './menu-item';

export default MenuItem.extend({
  series: DS.belongsTo('series')
});
