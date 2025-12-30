//! given an sorted array, find the target element (return element or index)

function linearSearch(arr, target) {
  console.log("array length", arr.length);
  let n = arr.length;
  let compare = 0;
  for (let i = 0; i < n; i++) {
    compare++;
    if (arr[i] === target) return { target: arr[i], noOfComparisons: compare };
    // else return -1;
  }
  return { target: -1, noOfComparisons: compare };
}

console.log(
  linearSearch([1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 15, 17, 19, 19, 20, 21], 21)
);

console.log(linearSearch([12, 1, 23, 34, 12, 0, 1, 4]));

//! TC ==> O(n)
//! SC ==> O(1)

function binarySearch(arr, target) {
  let n = arr.length;
  console.log("array length", n);
  let compare = 0;
  let start = 0;
  let end = n - 1;

  while (end >= start) {
    compare++;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target)
      return { target: arr[mid], noOfComparisons: compare };
    else if (target < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return { target: -1, noOfComparisons: compare };
}

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 15, 17, 19, 19, 20, 21], 21)
);
//! this is not possible for unsorted array
//! TC ==> O (log n)
//! SC ==> O (1)

//! move all zeros to end [1, 2, 0, 0 ,1 2,3,5,6, 0]
//! find largest and second largest element in ar array using single loop
