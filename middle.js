let assertArraysEqual = function(actual, expected) {
  if (middle(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
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


let middle = function(newArr) {
  let output = [];
  if (newArr.length <= 2) {
  return output;
  } else if (newArr.length % 2 === 0) {
    output = [newArr[Math.floor(newArr.length/2) -1], newArr[Math.floor(newArr.length/2)]];
    return output;
  }
  else {
  output = [newArr[Math.floor(newArr.length/2)]];
return output;
  }
}



console.log(middle([1, 3, 4]));