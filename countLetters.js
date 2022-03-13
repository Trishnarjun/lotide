const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😏😏😏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤧🤧🤧 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(arr) {
  let objects = {};
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr.charAt(i) === arr.charAt(j)) {
        counter++;
        let key = arr.charAt(i);
        objects[key] = counter;
      }
    }
  }
  delete objects[" "];
  console.log(objects);
  // for (let k = 0; i < array.length; k++) {
    
  // }
};

countLetters('LHL');
countLetters("lighthouse in the house");