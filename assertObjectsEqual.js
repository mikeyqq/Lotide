let assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !==  ${inspect(object2)}`);
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


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {

    for (let key in object1) {
      if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
              
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }

    return true;
  }
};


assertObjectsEqual(cd = {c: "1", d: ["2", 3]}, dc = { d: ["2", 3], c: "1"})


module.exports = assertObjectsEqual;