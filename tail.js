let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

assertEqual('Lighthouse', 'abc');
assertEqual(1, 1);

let tail = function(arr = []) {
  if (arr.length > 1) {
    return arr.slice(1);
  } else {
    return arr = [];
  }
};

console.log(tail([]));
console.log(tail([1,2,3,4,5,6]));
console.log(tail(['tester', 'hi', ]));