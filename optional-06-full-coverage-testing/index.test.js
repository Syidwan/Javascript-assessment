import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function', () => {

  assert.strictEqual(sum(2, 3), 5);
  

  assert.strictEqual(sum(0, 0), 0);
  

  assert.strictEqual(sum(5, 0), 5);
  
 
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
  
  
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum('2', '3'), 0);
  assert.strictEqual(sum(null, 3), 0);
  assert.strictEqual(sum(2, undefined), 0);
  assert.strictEqual(sum(undefined, undefined), 0);
  

  assert.strictEqual(sum(1e6, 1e6), 2e6);
});


