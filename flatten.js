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



let flatten = function(arr) {
  let results = [];
  for ( let i = 0; i < arr.length; i++ ) {
    results = results.concat(arr[i]);
  }
  return results;
};

module.exports = flatten;

/*console.log((flatten([1, 2, [3, 4], 5, [6]])));*/






