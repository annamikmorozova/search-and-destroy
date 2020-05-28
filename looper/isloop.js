'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  const current = linkedlist.head;
  let slow = current;
  let fast = current.next;
  while (slow !== fast && fast !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (slow === fast) {
    return true;
  } else {
    return false;
  }
};

// find where the node value for the beginning of the loop
// do we call isloop in find loop? the opposite? or another option?

const findLoop = (linkedlist) => {
  if (isLoop(linkedlist)) {
    let current = linkedlist.head;
    let slow = current;
    let fast = current.next;
    while (fast.previous === slow) {
      slow = slow.next;
      fast = fast.next;
    }
    return fast.value;
  }
};
/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = { isLoop, findLoop };
