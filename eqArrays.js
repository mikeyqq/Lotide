//THIS IS USED TO COMPARE TWO DIFFERENT ARRAYS TO SEE IF THEY EQUAL EACH OTHER.

let eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};



module.exports = eqArrays;
