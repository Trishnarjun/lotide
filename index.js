const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqArrays: eqArrays
};