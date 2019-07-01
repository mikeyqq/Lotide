
const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');


//TEST CODE
assertArraysEqual(tail([]), undefined);
assertArraysEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
assertArraysEqual(tail(['tester', 'hi']), ['hi']);

