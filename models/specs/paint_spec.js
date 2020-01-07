const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function(){

  let paint1;

  beforeEach(function (){
    paint1 = new Paint(2);
    paint2 = new Paint(0);
  })

  it('has paint', function(){
      const expected = false;
      const actual = paint1.checkIfEmpty();
    assert.strictEqual(actual, expected);
  })

  it('should check if it is empty', function(){
    const expected = true;
    const actual = paint2.checkIfEmpty();
    assert.strictEqual(actual, expected);
  })

  it('should be able to empty', function(){
    paint1.emptyPaintCan()
    const expected = 0
    const actual = paint1.litres;
    assert.strictEqual(actual, expected)
  })

});
