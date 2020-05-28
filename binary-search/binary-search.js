'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  if (new Set(array).size !== array.length) {
    return 'duplicates are found';
  }
  if (array.includes(target)) {
    return true;
  } else {
    return false;
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
