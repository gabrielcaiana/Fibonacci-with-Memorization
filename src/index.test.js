import { fib } from './index'

describe('Fibonacci Function', () => {
  test('calculates correct fib(0)', () => {
      expect(fib()(0)).toBe(0);
  });

  test('calculates correct fib(1)', () => {
      expect(fib()(1)).toBe(1);
  });

  test('calculates correct fib(2)', () => {
      expect(fib()(2)).toBe(1);
  });

  test('calculates correct fib(3)', () => {
      expect(fib()(3)).toBe(2);
  });

  test('calculates correct fib(4)', () => {
      expect(fib()(4)).toBe(3);
  });

  test('calculates correct fib(5)', () => {
      expect(fib()(5)).toBe(5);
  });

  test('calculates correct fib(10)', () => {
      expect(fib()(10)).toBe(55);
  });

  test('calculates correct fib(20)', () => {
      expect(fib()(20)).toBe(6765);
  });

  test('calculates correct fib(40)', () => {
    expect(fib()(40)).toBe(102334155);
});
});