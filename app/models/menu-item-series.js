import DS from 'ember-data';
import MenuItem from './menu-item';

export default MenuItem.extend({
  quantity: DS.attr('number'),
  series: DS.belongsTo('series')
});
