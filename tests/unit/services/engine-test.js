import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

module('Unit | Service | engine', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.subject = this.owner.lookup('service:engine');
  });

  hooks.afterEach(function () {
    this.subject.fullStop();
  });

  test('it can warp', function (assert) {
    this.subject.goToWarp(4);

    assert.true(this.subject.isWarp);
    assert.false(this.subject.isImpulse);
    assert.equal(this.subject.warpFactor, 4);
    assert.equal(this.subject.impulseSpeed, 0);
    assert.equal(this.subject.warpCoreStatus, 'STABLE');
  });

  test('it does not exceed warp 9.8', function (assert) {
    console.warn = sinon.spy();

    this.subject.goToWarp(12);

    assert.ok(console.warn.calledOnceWith(`I'm givin' it all she's got, Captain!`));
    assert.true(this.subject.isWarp);
    assert.false(this.subject.isImpulse);
    assert.equal(this.subject.warpFactor, 9.8);
    assert.equal(this.subject.warpCoreStatus, 'UNSTABLE');
  });
});
