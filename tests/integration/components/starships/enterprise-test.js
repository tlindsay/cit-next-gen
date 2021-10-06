import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | starships/enterprise', function (hooks) {
  setupRenderingTest(hooks);

  test('it boldly goes', async function (assert) {
    this.set('mission', 'To explore strange new worlds...');

    await render(hbs`<Starships::Enterprise />`);

    assert.dom('[data-test=mission]').hasNoText();

    await render(hbs`
      <Starships::Enterprise @registry="NCC-1701-D">
        {{this.mission}}
      </Starships::Enterprise>
    `);

    assert.dom('[data-test=registry]').hasText('NCC-1701-D')
    assert.dom('[data-test=captain]').hasText('Jean-Luc Picard');
    assert.dom('[data-test=mission]').hasText('To explore strange new worlds...');
  });

  test('it boldly goes fast', async function (assert) {
    const engine = this.owner.lookup('service:engine');
    const warpSpy = sinon.spy(engine, 'maximumWarp');

    await render(hbs`<Starships::Enterprise />`);

    await click('[data-test=engage]');

    assert.ok(warpSpy.calledOnce);
    assert.equal(engine.warpFactor, 8.2);
  });

  test('it handles Borg abductions', async function (assert) {
    this.set('captain', 'William Riker');

    await render(hbs`<Starships::Enterprise @captain={{this.captain}} />`);

    assert.dom('[data-test=captain]').hasText('William Riker');
  });
});
