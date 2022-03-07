const assertEqual = function(actual, expected) {
  const result = actual === expected ? `😏😏😏 Assertion Passed: ${actual} === ${expected}` : `🤧🤧🤧 Assertion Failed: ${actual} !==  ${expected}`;
  console.log(result);
};

const head = function(newArray) {
  return newArray[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head(["Hello"]), "Hello");