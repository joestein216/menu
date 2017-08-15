import { moduleForModel, test } from 'ember-qunit';

moduleForModel('menu-section', 'Unit | Model | menu section', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
