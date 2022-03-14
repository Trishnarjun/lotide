const assert = require('chai').assert;
const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs'] ", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns ['Lighthouse'] for ['Lighthouse'] ", () => {
    assert.deepEqual(tail(["Lighthouse"]), []);
  });

  it("returns [] for [] ", () => {
    assert.deepEqual(tail([]), []);
  });
  
});