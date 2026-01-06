// when a function calls itself.
// recursion
// --> base case (to stop recursion)
// --> recursive case (to call itself)

// --> base case are usually written at the top of the function

let a = 10;
//! print numbers 1 to n using recursion.
// let num = 1;
// function printNumbers() {
//   if (num === 20) {
//     console.log(num);
//     return;
//   }
//   console.log(num);
//   num++;
//   printNumbers();
// }

// printNumbers();

// function printNum(n) {
//   if (n === 1) {
//     console.log(n);
//     return;
//   }
//   printNum(--n);
//   console.log(n);
// }

// printNum(3);

//! addition of n numbers
function sum(n) {
  if (n === 1) {
    return 1;
  }
  let result = n + sum(n - 1);
  return result;
  // return n + sum(n - 1);
}
// console.log(sum(5));

//! factorial of a number
// n! = n * (n-1) * (n-2) * (n-3) *... * 1
// 4! = 4 * 3 * 2 * 1 == 24

function factorial(n) {
  if (n == 2) return 2;
  let prod = n * factorial(n - 1);
  return prod;
}

console.log(factorial(4));
