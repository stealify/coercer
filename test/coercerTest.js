var expect = require('chai').expect,
  coercer = require('../')

describe('coercer', function() {
  it('should coerce values', function() {
    var output = coercer({
      'foo': 'true',
      'bar': '5',
      'baz': 'hello',
      'qux': {
        'quux': 'eight'
      },
      'corge': ['7', '93.2', 'false'],
      'grault': true,
      'garply': false,
      'waldo': 'undefined'
    })

    expect(output.foo).to.be.true
    expect(output.bar).to.equal(5)
    expect(output.baz).to.equal('hello')
    expect(output.qux.quux).to.equal('eight')
    expect(output.corge.length).to.equal(3)
    expect(output.corge[0]).to.equal(7)
    expect(output.corge[1]).to.equal(93.2)
    expect(output.corge[2]).to.be.false,
    expect(output.grault).to.be.true
    expect(output.garply).to.be.false
    expect(output.waldo).to.be.undefined
  })
})
