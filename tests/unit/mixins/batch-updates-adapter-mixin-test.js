import Ember from 'ember';
import BatchUpdatesAdapterMixinMixin from 'menu/mixins/batch-updates-adapter-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | batch updates adapter mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let BatchUpdatesAdapterMixinObject = Ember.Object.extend(BatchUpdatesAdapterMixinMixin);
  let subject = BatchUpdatesAdapterMixinObject.create();
  assert.ok(subject);
});
