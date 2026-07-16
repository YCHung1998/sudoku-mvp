import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateProgressPercent } from '../progress-logic.mjs';

test('進度只計算玩家填入的空格，不把預填題目格重複計入', () => {
  assert.equal(calculateProgressPercent({ filled: 47, given: 46, totalOpen: 35 }), 3);
});

test('完成所有空格時進度為 100%，不會超過 100%', () => {
  assert.equal(calculateProgressPercent({ filled: 81, given: 46, totalOpen: 35 }), 100);
});
