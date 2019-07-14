let mathClamp;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  mathClamp = require('../../index.js');
} else {
  mathClamp = returnExports;
}

describe('mathClamp', function() {
  it('is a function', function() {
    expect(typeof mathClamp).toBe('function');
  });

  it('should work Math like with none or a single argument', function() {
    const values = [void 0, null, 0, '', false, true, 1, '1', [], {}, function() {}, NaN, Infinity];

    expect(Number.isNaN(mathClamp())).toBe(true);
    values.forEach(function(value) {
      expect(Object.is(mathClamp(value), Math.max(0, value))).toBe(true, `${value} clamped ${mathClamp(value)}`);
    });

    expect(Object.is(mathClamp(-0), -0)).toBe(true);
    expect(mathClamp(-Infinity)).toBe(-Infinity);
  });

  it('should throw RangeError if min > max', function() {
    expect(function() {
      mathClamp(5, 0, -1);
    }).toThrow();

    expect(function() {
      mathClamp(NaN, 0, -1);
    }).toThrow();

    expect(function() {
      mathClamp(5, -1, -2);
    }).toThrow();

    expect(function() {
      mathClamp(5, 2, 1);
    }).toThrow();
  });

  it('if min === max should return min', function() {
    expect(mathClamp(-5, 3, 3)).toBe(3);
    expect(mathClamp(0, 3, 3)).toBe(3);
    expect(mathClamp(5, 3, 3)).toBe(3);
  });

  it('should work with a `max` argument', function() {
    expect(mathClamp(5, 3)).toBe(3);
    expect(mathClamp(1, 3)).toBe(1);
  });

  it('should clamp negative numbers', function() {
    expect(mathClamp(-10, -5, 5)).toBe(-5);
    expect(mathClamp(-10.2, -5.5, 5.5)).toBe(-5.5);
    expect(mathClamp(-Infinity, -5, 5)).toBe(-5);
  });

  it('should clamp positive numbers', function() {
    expect(mathClamp(10, -5, 5)).toBe(5);
    expect(mathClamp(10.6, -5.6, 5.4)).toBe(5.4);
    expect(mathClamp(Infinity, -5, 5)).toBe(5);
  });

  it('should not alter negative numbers in range', function() {
    expect(mathClamp(-4, -5, 5)).toBe(-4);
    expect(mathClamp(-5, -5, 5)).toBe(-5);
    expect(mathClamp(-5.5, -5.6, 5.6)).toBe(-5.5);
  });

  it('should not alter positive numbers in range', function() {
    expect(mathClamp(4, -5, 5)).toBe(4);
    expect(mathClamp(5, -5, 5)).toBe(5);
    expect(mathClamp(4.5, -5.1, 5.2)).toBe(4.5);
  });

  it('should not alter `0` in range', function() {
    expect(1 / mathClamp(0, -5, 5)).toBe(Infinity);
  });

  it('should clamp to `0`', function() {
    expect(1 / mathClamp(-10, 0, 5)).toBe(Infinity);
  });

  it('should not alter `-0` in range', function() {
    expect(1 / mathClamp(-0, -5, 5)).toBe(-Infinity);
  });

  it('should clamp to `-0`', function() {
    expect(1 / mathClamp(-10, -0, 5)).toBe(-Infinity);
  });

  it('should return `NaN` when `number` is `NaN`', function() {
    expect(Number.isNaN(mathClamp(NaN, -5, 5))).toBe(true);
  });

  it('should return `value` when `min` or `max` are `NaN`', function() {
    expect(mathClamp(1, -5, NaN)).toBe(1);
    expect(mathClamp(-6, -5, NaN)).toBe(-5);
    expect(mathClamp(-1, NaN, 5)).toBe(-1);
    expect(mathClamp(6, NaN, 5)).toBe(5);
  });
});
