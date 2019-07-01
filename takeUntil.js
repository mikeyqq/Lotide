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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const takeUntil = function (array, callback) {
  let results = []
  for (let i of array) {
    if (callback(i)) {
      break;
    }
    results.push(i);
  }
  return results;
}

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log('---');
console.log(results2);

module.exports = takeUntil;

/*
assertArraysEqual(takeUntil([1, 2, 3, 4], m => m < 2), []);
assertArraysEqual(takeUntil(['h', 'e', 'r', 'j', 'f'], m => m === 'f' ), ['h', 'e', 'r', 'j']);
assertArraysEqual(takeUntil([1, 2, 3, 10, 8, -3, 7], m => m < -2), [1, 2, 3, 10, 8]);*/


