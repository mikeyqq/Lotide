const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#head", () => {
it ('returns 1 for 1', ()  => {
  assert.deepEqual(assertEqual(1, 1));
})
})


// TEST CODE
/*assertEqual(1, 1);
assertEqual(2, 1);
assertEqual('2', 1);
assertEqual('2', '2');
assertEqual('2', '1');*/

