/*
  Javascript flaw on integers base, dealing with octal numbers (Out of strict mode):
    when you pass an integer with leading zeros such as 0112 to any javascript operator, it looks inside the digits, if all digits are less than 8, it behaves like your integer is in base 8 (Octal) and converts it internally to base 10.
    But if you integer has any digit greater than or equal to 8, Javascript will treat the integer as an integer in base 10.

    This is why if you evalute 0112 + 1 in any javascript console, you'll get the output of 75. Becase 0112 has digits all less than 8, javascript treats it as an octal number and converts it to base 10, so the result would 74.

    0112(8) ==> 74(10)

    Credit: Farzad YZ <farskid@gmail.com>
*/

const surviveLeadingZeros = integerWithZeros => {
  let result = ''

  while (integerWithZeros > 8) {
    result += integerWithZeros % 8
    integerWithZeros = parseInt(integerWithZeros / 8, 10)
  }

  return toInteger(reverseInteger(result + integerWithZeros))
}

const reverseInteger = integer => String(integer).split('').reverse().join('')

const toInteger = input => {
  if (!['number', 'string'].includes(typeof input)) {
    throw new Error('invalid input in toInteger, expects string or number, got ' + typeof input)
  }

  if (typeof input === 'string' && input.length === 0) {
    throw new Error('toInteger does not accept empty strings')
  }

  return Number(input)
}

module.exports = {
  ensafe: surviveLeadingZeros,
  toInteger,
  reverseInteger
}