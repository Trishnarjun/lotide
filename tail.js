const assertEqual = function(actual, expected) {
  const result = actual === expected ? `😏😏😏 Assertion Passed: ${actual} === ${expected}` : `🤧🤧🤧 Assertion Failed: ${actual} !==  ${expected}`;
  console.log(result);
};

const tail = function(newArray) {
  console.log(newArray.slice(1));
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);