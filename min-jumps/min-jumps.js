'use strict';

// Complete this algo
const minJumps = (arr) => {
  // we need to know length of the array and value
  // of the index
  // use the index to find the larger number
  if (arr[0] >= arr.length - 1) {
    return 1;
  }
  let largest = 0;
  let index = 0;
  for (let i = 1; i <= arr[0]; i++) {
    if (largest < arr[i] + i) {
      index = i;
      largest = arr[i] + i;
    }
  }
  return minJumps(arr.slice(index)) + 1
};

module.exports = minJumps;