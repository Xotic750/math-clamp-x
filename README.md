<a
  href="https://travis-ci.org/Xotic750/math-clamp-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/math-clamp-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/math-clamp-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/math-clamp-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/math-clamp-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/math-clamp-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/math-clamp-x"
  title="npm version">
<img src="https://badge.fury.io/js/math-clamp-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/math-clamp-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/math-clamp-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/math-clamp-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/math-clamp-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_math-clamp-x"></a>

## math-clamp-x

Clamp a number to limits.

<a name="exp_module_math-clamp-x--module.exports"></a>

### `module.exports(value, [min], max)` ⇒ <code>number</code> ⏏

This method clamp a number to min and max limits inclusive.

**Kind**: Exported function  
**Returns**: <code>number</code> - The clamped number.  
**Throws**:

- <code>RangeError</code> If min > max.

| Param | Type                | Default        | Description               |
| ----- | ------------------- | -------------- | ------------------------- |
| value | <code>number</code> |                | The number to be clamped. |
| [min] | <code>number</code> | <code>0</code> | The minimum number.       |
| max   | <code>number</code> |                | The maximum number.       |

**Example**

```js
import mathClamp from 'math-clamp-x';

console.log(mathClamp(-5, 3, 3)); // 3
console.log(mathClamp(0, 3, 3)); // 3
console.log(mathClamp(5, 3, 3)); // 3
```
