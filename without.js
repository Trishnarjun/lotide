const eqArrays = function(arrayOne, arrayTwo) {
  let counter = 0;
  for (let i = 0; i < arrayOne.length; i++ ) {
    if (arrayOne[i] === arrayTwo[i]) {
      counter++;
    }
  }
  if (counter === 3){
    return true
  } else {
    return false;
    console.log(0);
  } 
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo) === true) {
    console.log(`😏😏😏 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🤧🤧🤧 Assertion Failed: ${arrayOne} !==  ${arrayTwo}`);
  }
}

const without = function(arr, removedWord) {
  let wordsClone = words.slice();
  let indexOfWord = wordsClone.indexOf(removedWord[0]);
  wordsClone.splice(indexOfWord,indexOfWord);
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);