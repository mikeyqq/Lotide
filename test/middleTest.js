//const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3] for [1, 3, 4]", () => {
    assert.deepEqual(middle([1, 3, 4]), [3]);
  });
});

//TEST CODE
//assertArraysEqual(middle([1, 3, 4]), [3]);