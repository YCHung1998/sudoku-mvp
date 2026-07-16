import test from 'node:test';
import assert from 'node:assert/strict';
import { isPeerCell } from '../peer-logic.mjs';

test('選中格本身不算 peer', () => {
  assert.equal(isPeerCell(4, 4, 4, 4), false);
});

test('同行視為 peer', () => {
  assert.equal(isPeerCell(4, 0, 4, 8), true);
});

test('同列視為 peer', () => {
  assert.equal(isPeerCell(0, 4, 8, 4), true);
});

test('同一個 3x3 宮格內視為 peer', () => {
  assert.equal(isPeerCell(0, 0, 2, 2), true);
});

test('不同行、不同列、不同宮格則不是 peer', () => {
  assert.equal(isPeerCell(0, 0, 5, 5), false);
});

test('選中格所在行、列、宮格共 20 個 peer 加自身共 21 格', () => {
  const selRow = 4, selCol = 4;
  let count = 0;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (isPeerCell(row, col, selRow, selCol)) count++;
    }
  }
  assert.equal(count, 20);
});
