import phaser from 'cit-next-gen/utils/phaser';
import { module, test } from 'qunit';

module('Unit | Utility | phaser', function () {
  test('it stuns', function (assert) {
    let result = phaser('stun');
    assert.equal(result, 'pew pew');
  });

  test('it kills', function (assert) {
    let result = phaser('kill');
    assert.equal(result, 'PEW PEW');
  });
});
