let assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅  Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !==  ${arrTwo}`);
  }
};


let eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const words = ['hello', 'goodbye', 'pikachu', 'meow'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map([1, 2, 3], m => m * 2), [2, 4, 6]);
assertArraysEqual(map(['h', 'e'], m => m + 1), ['h1', 'e1']);
assertArraysEqual(map([[1, 2, 3], [2, 3, 4]], m => m.length), [3, 3]);