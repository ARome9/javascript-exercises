const reverseString = function(str) {
  let strArr = str.split('');
  let reversedArr = strArr.reverse();
  let joined = reversedArr.join('');
  return joined;
};
reverseString('hi');
// Do not edit below this line
module.exports = reverseString;
