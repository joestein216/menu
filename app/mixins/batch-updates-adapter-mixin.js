// Borrowed from github issue:
// https://github.com/emberjs/data/issues/1849#issuecomment-245641195
// Authored by:
// https://github.com/Fenntasy

import Ember from 'ember';

export default Ember.Mixin.create({
  batchUpdatesTimeout: 50,
  batchUpdatesPathForType: function(type) {
    return this.pathForType(type);
  },
  batchUpdatesBuildUrl: function(type) {
    const container = this.batchUpdatesPathForType(type);
    return `${this.namespace}/${container}`;
  },
  _batchUpdates_handle: null,
  _batchUpdates_queue: [],
  _batchUpdates_resolvers: [],
  _batchUpdates(type) {
    const container = this.batchUpdatesPathForType(type);
    const records = {
      [container]: this._batchUpdates_queue
    };
    this._batchUpdates_queue = [];
    this.ajax(
      this.batchUpdatesBuildUrl(type),
      "PATCH",
      {data: records}
    ).then(() => {
      this._batchUpdates_resolvers.forEach(p => p.resolve());
      this._batchUpdates_resolvers = [];
    }, () => {
      this._batchUpdates_resolvers.forEach(p => p.reject());
      this._batchUpdates_resolvers = [];
    });
  },
  updateRecord(store, type, snapshot) {
    const record = Object.assign(
      {},
      snapshot._attributes,
      { id: snapshot.id }
    );
    if (this._batchUpdates_handle) {
      clearTimeout(this._batchUpdates_handle);
    }
    this._batchUpdates_queue.push(record);
    this._batchUpdates_handle = setTimeout(
      this._batchUpdates.bind(this, type.modelName),
      this.batchUpdatesTimeout
    );

    return new Ember.RSVP.Promise((resolve, reject) => {
      this._batchUpdates_resolvers.push({resolve, reject});
    });
  }
});
