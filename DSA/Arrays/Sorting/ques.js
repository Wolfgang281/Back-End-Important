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

//! move all zeros to end [1, 2, 0, 0 ,-1 2,3,5,6, 0] (in place --> O(n))
// let i =0 , j=0

//! find largest and second largest element in ar array using single loop

/* 

Intersection of Two Arrays
Given two arrays, return an array of their common elements (each element should appear only once in the result).
Optimize using Set.

Frequency Sort (String / Array + Map)
Given a string, sort the characters in decreasing order of their frequency.
Example: "tree" → "eert" or "eetr"

Subarray with Sum Equals K
Given an array of integers and an integer k, return the total number of continuous subarrays whose sum equals k.
Constraint: Solve in O(n) time using a Map (prefix sum technique).

Check If Two Strings Are Isomorphic
Two strings are isomorphic if the characters in one string can be replaced to get the other string.
Example: "egg" and "add" → true, "foo" and "bar" → false
Use Map to maintain character mappings.

Longest Consecutive Sequence
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
Example: [100,4,200,1,3,2] → 4
Constraint: O(n) time using Set.

Top K Frequent Elements
Given an integer array and an integer k, return the k most frequent elements.
Use Map for frequency counting and optimize beyond simple sorting if possible. 
*/

//!

// let minValue = -Infinity;
// let maxValue = Infinity;
// console.log(minValue, maxValue);

//! given a string, Count the frequency of each characters (uppercase=lowercase)

// brute force --> for every value of i, use a nested for loop to count the

function countFreq(str) {
  let map = new Map();

  for (let char of str) {
    if (char !== " ") {
      //   if (map.has(char)) {
      //     let oldFreq = map.get(char);
      //     let newFreq = oldFreq + 1;
      //     map.set(char, newFreq);
      //   } else {
      //     map.set(char, 1);
      //   }
      map.set(char, (map.get(char) || 0) + 1);
    }
  }

  console.log(map);
}
//! TC ==> O(n)
//! SC ==> O(1)

// countFreq("given a string, count the frequency of each characters");

//! given an array, you have to find two such elements, which sum is equal to the target element
let arr = [3, 7, 1, 2, 4, 6, 0, 8];
let target = 10;

ans = [
  [2, 8],
  [4, 6],
];

function findSum(arr, target) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let diffValue = target - arr[i];

    if (map.has(diffValue)) {
      let secondEle = arr[i];
      let firstEle = diffValue;
      result.push([firstEle, secondEle]);
    } else {
      map.set(arr[i], i);
    }
  }
  console.log(result);
}
//! TC == O(n)
//! SC == O(n)
findSum(arr, target);

//! find the maximum length of the unique string and return that string

function findMaxLength(str) {
  let set = new Set();
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      set.delete(str[i - 1]);
    } else {
      set.add(str[i]);
      maxLength = Math.max(maxLength, set.size);
    }
  }
}
