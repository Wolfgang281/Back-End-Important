//! =========================================================================
// *
// * *
// * * *
function printLeftTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// printLeftTriangle(4);

//! =========================================================================
//? * * *  0-> 3 n-i
//? * *    1-> 2
//? *      2-> 1
function printLeftTriangleInverted(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// printLeftTriangleInverted(3);

//! =========================================================================
//       *
//     * *
//   * * *
// * * * *
function printRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    //! space
    for (let j = 0; j < n - (i + 1); j++) {
      row += "  ";
    }
    //! stars
    for (let k = 0; k <= i; k++) {
      row += "* ";
    }
    console.log(row);
  }
}
// printRightTriangle(4);

//! =========================================================================
// * * *
//   * *
//     *
function printRightTriangleInverted(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    //! space
    for (let j = 0; j < i; j++) {
      row += "  ";
    }
    //! stars
    for (let k = 0; k < n - i; k++) {
      row += "* ";
    }
    console.log(row);
  }
}
// printRightTriangleInverted(3);

//! ========================================================================
//     *        i=0| 2 spaces| 1 star
//   * * *      i=1| 1 space | 3 star
// * * * * *`   i=2| 0 space | 5 star
// n=3 -->

function upperHalfPyramid(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    //! space
    for (let j = 0; j < n - (i + 1); j++) {
      row += "  ";
    }
    //! stars
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "* ";
    }
    console.log(row);
  }
}
// upperHalfPyramid(3);

//! ========================================================================
//? n = 3
// * * * * *    i=0 | 0 space | 5 stars
//   * * *      i=1 | 1 space | 3 stars
//     *        i=2 | 2 space | 1 star

function printInvertedHalfPyramid(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    //! space
    for (let j = 0; j < i; j++) {
      row += "  ";
    }
    //! stars (2*n) - (2*i+1) --> 2n - 2i + 1 --> 2(n-i)+1
    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      row += "* ";
    }
    console.log(row);
  }
}
// printInvertedHalfPyramid(3);

//! ======================================================================
// for n = 3
//     *        i =0
//   * * *        1
// * * * * *      2
//   * * *        3 i = 1
//     *          4

function printFullPyramid(n) {
  //& upper half
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += "  ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "* ";
    }
    console.log(row);
  }
  //& lower half
  for (let i = n - 2; i >= 0; i--) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += "  ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "* ";
    }
    console.log(row);
  }
}

// printFullPyramid(5);

//! =============================================================================
//         *
//       *   *
//     *       *
//   *           *
// * * * * * * * * *
function hollowUpperPyramid(n) {
  //& upper half
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += "  ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      if (k == 0 || i == n - 1 || k == 2 * i) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}
// hollowUpperPyramid(5);

//! ===========================================================================
//? pascal triangle
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

function pascalTriangle(n) {
  let previousRow = [];
  for (let i = 0; i < n; i++) {
    let currentRow = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) currentRow.push(1);
      else currentRow.push(previousRow[j - 1] + previousRow[j]);
    }
    console.log(currentRow.join(" "));
    previousRow = currentRow;
  }
}

// pascalTriangle(5);

//! ===========================================================================
//? floyd's triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10

//& split() converts string to array
//& join () converts array to string

// let str = "hello"; // --> ['h', 'e', 'l','l','o']
// let [x, y, z, ...q] = str;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(q);

//! ==================================================================
//? *             *  i=0 | 1 star | 6 spaces | 1 star
//? * *         * *  i=1 | 2 star | 4 spaces | 2 star
//? * * *     * * *  i=2 | 3 star | 2 spaces | 3 star
//? * * * * * * * *  i=3 | 4 star | 0 space  | 4 stars

function printHalfButterfly(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    //! left stars
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    //! spaces
    for (let k = 0; k < (n - i - 1) * 2; k++) {
      row += "  ";
    }
    //! right stars
    for (let l = 0; l <= i; l++) {
      row += "* ";
    }

    console.log(row);
  }
}
printHalfButterfly(7);

//! =================================================================
// *             *
// * *         * *
// * * *     * * *
// * * * * * * * *
// * * * * * * * *
// * * *     * * *
// * *         * *
// *             *
