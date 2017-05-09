const chai = require('chai')
const betterJsInteger = require('../index')

const { expect, assert } = chai

describe('reverseInteger', () => {
  it('should return string', () => {
    expect(typeof betterJsInteger.reverseInteger(345)).to.equal('string')
  })
  it('should reverse number', () => {
    expect(betterJsInteger.reverseInteger(345)).to.equal('543')
  })
})