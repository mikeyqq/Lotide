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


const letterPositions = function(sentence) {
const results = {};
sentence = sentence.replace(/\s/g, '')

for(let i = 0; i < sentence.length; i++){
  if(!results[sentence[i]]) {
    results[sentence[i]] = [];
  } 
 results[sentence[i]].push(i)
  }
  return results;
};

module.exports = letterPositions;

/*
assertArraysEqual(letterPositions("hello").e, [1]);*/


