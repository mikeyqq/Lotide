const eqArrays = require('../eqArrays');
//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for comparing [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true when comparing ['1', '2', '3'], ['1', '2', '3']]", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); 
  });

});



/*//TEST CODE FOR ARRAYS TO COMPARE TWO DIFFERENT ARRAYS to see if actual returns true or false
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);*/