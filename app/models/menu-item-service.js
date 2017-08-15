import DS from 'ember-data';
import MenuItem from './menu-item';

export default MenuItem.extend({
  duration: DS.attr('string'),
  service: DS.belongsTo('service')
});
