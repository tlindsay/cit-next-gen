import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | officer', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    const store = this.owner.lookup('service:store');
    const enterprise = store.createRecord('starship', {
      name: 'Enterprise',
      registry: 'NCC-1701-D',
      shipClass: 'Galaxy',
    });
    const officer = store.createRecord('officer', {
      name: 'Guinan',
      rank: 'Bartender',
      currentPosting: enterprise,
    });

    this.setProperties({
      store,
      enterprise,
      officer,
    });
  });

  // Replace this with your real tests.
  test('it computes title', function (assert) {
    assert.equal(this.officer.currentTitle, 'Bartender of the USS Enterprise');
  });
});
