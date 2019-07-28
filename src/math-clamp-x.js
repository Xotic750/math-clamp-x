import toNumber from 'to-number-x';

const getMaxMin = function getMaxMin(args) {
  const minVal = toNumber(args[1]);
  const result = args.length < 3 ? {max: minVal, min: 0} : {max: toNumber(args[2]), min: minVal};

  if (result.min > result.max) {
    throw new RangeError('"min" must be less than "max"');
  }

  return result;
};

// eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature
/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 */
// eslint-enable jsdoc/check-param-names
const clamp = function clamp(value) {
  const number = toNumber(value);

  if (arguments.length < 2) {
    return number;
  }

  /* eslint-disable-next-line prefer-rest-params */
  const {max, min} = getMaxMin(arguments);

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};

export default clamp;
