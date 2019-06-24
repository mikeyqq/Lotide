let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

assertEqual('Lighthouse', 'abc');
assertEqual(1, 1);


let head = function(valueOne = []) {
  console.log(valueOne[0]);
};

assertEqual(head());
assertEqual(head([]), "Hello");