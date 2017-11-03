
A better way to ensafe javascript integers from being treated as octal numbers

### Javascript flaw on integers base, dealing with octal numbers (Out of strict mode):

[![Greenkeeper badge](https://badges.greenkeeper.io/farskid/better-js-integers.svg)](https://greenkeeper.io/)

when you pass an integer with leading zeros such as __0112__ to any javascript operator, it looks inside the digits, if all digits are less than 8, it behaves like your integer is in base 8 (Octal) and converts it internally to base 10.
But if you integer has any digit greater than or equal to 8, Javascript will treat the integer as an integer in base 10.

This is why if you evalute `0112 + 1` in any javascript console, you'll get the output of `75`. Becase _0112_ has digits all less than 8, javascript treats it as an octal number and converts it to base 10, so the result would _74_.

```javascript
0112(8) ==> 74(10)
```

### Installation and Usage

`npm install better-js-integer --save`

```javascript
import { ensafe } from 'js-better-integer'

ensafe(0122) // returns 122
```

### Development

Be sure to write and run tests before sending any PR!

To run tests: `npm test`

Credit: Farzad YZ <farskid@gmail.com>
MIT Licensed.