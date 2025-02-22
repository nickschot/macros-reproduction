import { getEmberVersion } from 'macros-reproduction';
import { module, test } from 'qunit';

module('Unit | version', function () {
  test('it works', function (assert) {
    let result = getEmberVersion();
    assert.strictEqual(result, 'this should match the ember-try scenario');
  });
});
