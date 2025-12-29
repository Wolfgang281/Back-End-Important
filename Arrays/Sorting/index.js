// let arr = [1, 2, 12, 23, 45, 90, .......1000000, 7]; --> n
// arr length = 7
// target = 7

// target element = x (depends on input array size)
// time complexity --> best case:    worst case:   average case:

//! if the code is not depending upon the input ds (arrays, strings) size, in that case TC is constant -> O(1)

// if the code is depending upon the input ds (arrays, strings) size, in that case TC will be O(n) , where n is size of the array or string

//? brute force approach --> using only for loops

//! given an array find the target element
// let arr = [1, 2, 12, 23, 43, 45, 67, 90, 101]; //? binary sorted --> in every iteration, we discard one half of the array
let target = 43;
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    //! brute-force approach
    if (arr[i] === target) return "Present";
  }
  return false;
}
// console.log(findElement(arr, 11));

//! TC --> O(n)
//! SC --> O(1) --> constant

//! we will go with ascending order

//~ =============================== bubble sort =======================================
//! bubble sort --> in this each element is compared with adjacent elements, and smaller element is placed on the left side of the array (swapping). after every iteration the largest element will be sorted
// let arr = [1, 43, 31, 2, 90, 12, 23, 67, 10];
// let arr = [1, 31, 43, 2, 90, 12, 23, 67, 10];
// let arr = [1, 31, 2, 43, 90, 12, 23, 67, 10];
// let arr = [1, 2, 31, 12, 23, 43, 10, 67, 90];

// let arr = [1, 2, 3, 4];
function bubbleSort(arr) {
  let n = arr.length;
  let flag = false;
  let it = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      it++;
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }

    if (flag === false) break;
  }
  console.log(it);
  console.log(arr);
}
// bubbleSort(arr);

//! TC --> O(n^2) (worst case and avg)
//! TC --> O(n) (best case)
//! SC --> O(1):constant :> we are not creating any new array, only changing the input array (in place sorting algo)

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);
// setTimeout((), 5000) ==> 24.8 days

//~ =============================== selection sort =======================================
//! selection sort --> in this, we find the minimum element present in the array and swap it  with the value of i or starting element of the array, after every iteration the minimum element is sorted.
// let arr = [15, 43, 2, 2, 90, 12, 23, 67, 10];
function selectionSort(arr) {
  let size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < size; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  console.log(arr);
}
// selectionSort(arr);

//! SC ==> O(1) constant
//! TC ==> O(n^2) best and average

//~ =============================== insertion sort =======================================
//! in this, we divide the array in two parts, one sorted and another unsorted, then we iterate the unsorted array, and place the elements of unsorted in sorted array, in such a way that the order of sorted array does not change
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let currEle = arr[i];
    let j = i - 1;
    while (j >= 0 && currEle < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currEle;
  }
  console.log(arr);
}
// insertionSort([65, 12, 22, 2, 10, 9]);

//! TC ==> worst case O(n^2)
//! TC ==> best case ?
//! SC ==> constant O(1)

//! given two sorted array, merge the arrays such that the resultant array remains sorted (TC ==> O(n+m))
//? O(n log n)
let arr1 = [1, 6, 23, 34];
let arr2 = [5, 8, 12, 90, 100, 120];
// function mergeTwoSortedArr(arr1, arr2) {
//   let result = [...arr1, ...arr2];
//   //! applied bubble sort
//   // result.sort()
// }
//! TC ==> O(n^2) --> O(n)
//! TC ==> O(n+m)

//! all for loop are iterating the same array
// for (let i = 0; i < n; i++) {
//    for (let k = 0; k < n; k++) {
//        for (let j = 0; j < n; j++) {}
// }
// }

//! TC ==> O(n^3)

//! all for loop are iterating the same array
// for (let i = 0; i < n; i++) {}
// for (let j = 0; j < n; j++) {}
// for (let k = 0; k < n; k++) {}
//! TC ==> O(n+3)s

function mergeTwoSortedArr(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0,
    k = 0;
  let n = arr1.length;
  let m = arr2.length;
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      result[k++] = arr1[i++];
    } else {
      result[k++] = arr2[j++];
    }
  }
  //! arr1
  while (i < n) {
    result[k++] = arr1[i++];
  }
  //! arr2
  while (j < m) {
    result[k++] = arr2[j++];
  }
  console.log(result);
}

// mergeTwoSortedArr(arr1, arr2);

//! TC and SC ==> o(n+m) == O(n)

//~ =============================== merge sort =======================================
//! divide and conquer ==> in this, array is divided into two halves until the array contains only single element (using recursion), and then it is merged (using merge two sorted arrays technique)
let arr = [15, 43, 100, 24, 2, 2, 90, 12, 23, 67, 10];

function mergeSort(arr) {
  let tempArr = new Array(arr.length);
  sort(arr, tempArr, 0, arr.length - 1);
  console.log(arr);
}

function sort(arr, temp, left, right) {
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);
  sort(arr, temp, left, mid);
  sort(arr, temp, mid + 1, right);

  merge(arr, temp, left, mid, right);
}

function merge(arr, temp, left, mid, right) {
  let i = left,
    j = mid + 1,
    k = left;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= right) temp[k++] = arr[j++];

  for (let i = left; i <= right; i++) {
    arr[i] = temp[i];
  }
}

// mergeSort(arr);

//! TC ==> O(n log n)
//! SC ==> ?

//! question --> techniques (binary search, two/three pointer, sliding window (dynamic), etc....)
