import toNumber from 'to-number-x';
/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 */

export default function clamp(value) {
  var number = toNumber(value);
  var argsLength = arguments.length;

  if (argsLength < 2) {
    return number;
  }
  /* eslint-disable-next-line prefer-rest-params */


  var min = toNumber(arguments[1]);
  var max;

  if (argsLength < 3) {
    max = min;
    min = 0;
  } else {
    /* eslint-disable-next-line prefer-rest-params */
    max = toNumber(arguments[2]);
  }

  if (min > max) {
    throw new RangeError('"min" must be less than "max"');
  }

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
}

//# sourceMappingURL=math-clamp-x.esm.js.map