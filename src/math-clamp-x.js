/**
 * @file Clamp a number to limits.
 * @version 1.2.0.
 * @author Xotic750 <Xotic750@gmail.com>.
 * @copyright  Xotic750.
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module Math-clamp-x.
 */

const toNumber = require('to-number-x').toNumber2018;

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 * @example
 * var mathClamp = require('math-clamp-x');.
 */
module.exports = function clamp(value) {
  const number = toNumber(value);
  const argsLength = arguments.length;

  if (argsLength < 2) {
    return number;
  }

  let min = toNumber(arguments[1]);
  let max;

  if (argsLength < 3) {
    max = min;
    min = 0;
  } else {
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
};
