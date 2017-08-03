import DS from 'ember-data';

export default DS.Model.extend({
  duration: DS.attr('string'),
  name: DS.attr('string')
});
