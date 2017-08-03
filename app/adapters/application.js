import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  //bulkCommit: true,
  namespace: 'api'
});
