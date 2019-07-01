
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

module.exports = middle;

