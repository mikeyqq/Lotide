
const tail = require('../tail');
const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual');

describe("#tail", () => {
  it("returns 2, 3, 4, 5, 6 for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });

  it("returns 'hi' for ['tester', 'hi']", () => {
    assert.deepEqual(tail(['tester', 'hi']), ['hi']); 
  });

});





/*//TEST CODE
assertArraysEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
assertArraysEqual(tail(['tester', 'hi']), ['hi']);
assertArraysEqual(tail([]), 0);*/
