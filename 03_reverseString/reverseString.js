const reverseString = function(str) {
  var strArr = str.split('');
  var reversed = '';

  for (let i = strArr.length - 1; i >= 0; i--) {
    let currentWord = strArr[i];
    console.log('Current Letter: ', currentWord);
    reversed += currentWord;
  }
  return reversed;
};
// Do not edit below this line
module.exports = reverseString;
