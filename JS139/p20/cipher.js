const Alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('').sort();
const AlphabetReversed = 'qwertyuiopasdfghjklzxcvbnm'.split('').sort().reverse();

function encode(inpString) {
  let updString = inpString.toLowerCase().split(/[\s,.]+/).join('');
  return splitted(updString);

}

function splitted(inpString) {
  let arrOfNewWords = [];
  let newStr = '';
  for (let idx = 0; idx < inpString.length; idx++) {
    newStr += inpString[idx];
    if ((newStr.length === 5) || (idx === inpString.length - 1)) {
      arrOfNewWords.push(newStr);
      newStr = '';
    }
  }
  newStr = '';
  arrOfNewWords.forEach((word, idx) => {
    newStr += actualEncode(word);
    if (idx !== arrOfNewWords.length - 1) newStr += ' ';
  });
  return newStr;
}

function actualEncode(inpString) {
  inpString = inpString.toLowerCase();

  let returnArr = actualHelper(inpString);

  let locationOfLetters = returnArr[0];
  let numbersToPush = returnArr[1];
  let returnStr = '';

  locationOfLetters.forEach(num => {
    if (num === -1) {
      returnStr += numbersToPush.shift();
    } else {
      returnStr += AlphabetReversed[num];
    }
  });
  return returnStr;
}

function actualHelper(inpString) {
  let locationOfLetters = [];
  let numbersToPush = [];
  for (let idx = 0; idx < inpString.length; idx++) {
    if (Alphabet.indexOf(inpString[idx]) === -1) {
      numbersToPush.push(inpString[idx]);
      let location = Alphabet.indexOf(inpString[idx]);
      locationOfLetters.push(location);
    } else {
      let location = Alphabet.indexOf(inpString[idx]);
      locationOfLetters.push(location);
    }
  }
  let returnArr = [locationOfLetters, numbersToPush];

  return returnArr;
}

module.exports = encode;