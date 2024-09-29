import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js'; 

test('sum adds two numbers together', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5); 
});

test('sum can handle negative numbers', () => {
  const result = sum(-1, -1);
  assert.strictEqual(result, -2); 
});

test('sum can handle adding zero', () => {
  const result = sum(0, 5);
  assert.strictEqual(result, 5); 
});
