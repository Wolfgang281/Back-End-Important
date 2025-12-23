// when a function calls itself.
// recursion
// --> base case (to stop recursion)
// --> recursive case (to call itself)

// --> base case are usually written at the top of the function

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

function printNum(n) {
  if (n === 1) {
    console.log(n);
    return;
  }
  printNum(--n);
  console.log(n);
}

// printNum(10);

// some error

//! addition of n numbers

