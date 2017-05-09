const chai = require('chai')
const betterJsInteger = require('../index')

const { expect, assert } = chai

describe('ensafe', () => {
  it('does not convert to base 8 on leading zeros', () => {
    expect(betterJsInteger.ensafe(0122)).to.equal(122)
  })
})