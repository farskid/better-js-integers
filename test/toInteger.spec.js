const chai = require('chai')
const betterJsInteger = require('../index')

const { expect, assert } = chai

describe('toInteger', () => {
  it('should convert string to number', () => {
    expect(betterJsInteger.toInteger('12')).to.equal(12)
  })
  it('should just return input number', () => {
    expect(betterJsInteger.toInteger(456)).to.equal(456)
  })
  it('should reject type Boolean', () => {
    assert.throws(() => { betterJsInteger.toInteger(true) }, Error, 'invalid input in toInteger, expects string or number, got boolean')
  })
  it('should reject type Array', () => {
    assert.throws(() => { betterJsInteger.toInteger([1]) }, Error, 'invalid input in toInteger, expects string or number, got object')
  })
  it('should reject type Function', () => {
    assert.throws(() => { betterJsInteger.toInteger(function() {}) }, Error, 'invalid input in toInteger, expects string or number, got function')
  })
  it('should reject type Object', () => {
    assert.throws(() => { betterJsInteger.toInteger({a:1}) }, Error, 'invalid input in toInteger, expects string or number, got object')
  })
  it('should reject type Null', () => {
    assert.throws(() => { betterJsInteger.toInteger(null) }, Error, 'invalid input in toInteger, expects string or number, got object')
  })
  it('should reject type Undefined', () => {
    assert.throws(() => { betterJsInteger.toInteger(undefined) }, Error, 'invalid input in toInteger, expects string or number, got undefined')
  })
  it('should reject empty string', () => {
    assert.throws(() => { betterJsInteger.toInteger('') }, Error, 'toInteger does not accept empty strings')
  })
})