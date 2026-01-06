function printStarBox(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += +"*" + " ";
    }
    console.log(row);
  }
}

function printStarBox2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// printStarBox2(4);
// console.log("hi");

// process.stdout.write("hi");
// process.stdout.write("hello");

// this process.stdout.write is used to console the output and the cursor position is on the same line.
// console.log() prints the op and moves the cursor to the next line

// console.log();

// console.log("hi");
// console.log("hello");

// console.log(1 + 1); // 2 (add)
// console.log(1 + "1"); // 11 (concat)
// console.log("1" + 1); // 11 (concat)
// console.log("1" + 1 + 1); //111 (concat)
// console.log(1 + 2 + "1" + 1); // 311 (add, concat)

//! =================================================================================
/* 
* * * 
_ _ _
* * * 
*/
function printStarsFirstLastRows(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == n - 1) row += "* ";
      else row += "_ ";
    }
    console.log(row);
  }
}
// printStarsFirstLastRows(3);
// ~ same for first and last columns

//! =================================================================================
/* 
_ * _ 
* * *
_ * _
*/
function printPlus(n) {
  let mid = Math.floor(n / 2);
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i == mid || j == mid) row += "* ";
      else row += "_ ";
    }
    console.log(row);
  }
}
// console.log(printPlus(3));

//! =================================================================================
/* 
* _ _ 
_ * _
_ _ *
*/

function printPrimaryDiagonal(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i + j == n - 1 || i == j) row += "* ";
      else row += "- ";
    }
    console.log(row);
  }
}
// printPrimaryDiagonal(3);

//! =================================================================================
/* 
1 2 3
4 5 6
7 8 9
*/
function printNumbers(n) {
  let counter = 1; // try without any extra variables ()
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += +counter++ + " ";
      // counter++;
    }
    console.log(row);
  }
}
function printNumbers2(n) {
  let counter = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write(counter++ + " ");
    }
    console.log();
  }
}

// printNumbers2(3);
// printNumbers2(5);

// pre vs post

//! =================================================================================
/* 
1 1 1
2 2 2
3 3 3 
*/
function printNumbers3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + (i + 1) + " ";
    }
    console.log(row);
  }
}

// row (str) = row (str) + i (number) + 1 (number) + " "
// ""     + 0          + 1 ==> "0" + 1 ==> "01"

// printNumbers3(4);

//! =================================================================================
/* 
1 2 3 
1 2 3 
1 2 3
*/
function printNumberColWise(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }
}
// printNumberColWise(4);

//! =================================================================================
/* 
0 1 0 
1 0 1 
0 1 0
*/
function printAlternate(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 == 0) row += "W" + " ";
      else row += "B" + " ";
    }
    console.log(row);
  }
}

// printAlternate(5);

//! =================================================================================
/* 
1 4 7
2 5 8 
3 6 9
*/
function printCounterColWise(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += i + j * n + 1 + " ";
    }
    console.log(row);
  }
}
// printCounterColWise(3);

//! =================================================================================
/* 
A A A 
B B B 
C C C 
*/
function printLettersRowWise(n) {
  let charCode = "A".charCodeAt(0);
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += String.fromCharCode(charCode + i) + " ";
    }
    console.log(row);
  }
}
// printLettersRowWise(4);

//~ same with alphabets

//! charCodeAt() --> it gives the ASCII code for a particular character
//! String.fromCharCode() --> convert the ASCII code to string

// let str = "abc";
// console.log(str.charCodeAt(2));

// let charCode = 122;
// console.log(String.fromCharCode(charCode));

//! =========================================================
/* 
1 2 3  i/row(even) --> numbers are printing left to right
6 5 4  i/row(odd) --> right to left
7 8 9
*/
function zigZagPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      let num = i % 2 === 0 ? i * n + j + 1 : (i + 1) * n - j;
      row += num + " ";
    }
    console.log(row);
  }
}

// zigZagPattern(4);

//! =========================================================
/* 
1 2 3 
8 9 4
7 6 5 
*/
function spiralMat(n) {
  const resultMat = Array.from({ length: n }, () => new Array(n));

  let number = n * n;
  let counter = 1;

  let start = 0,
    left = 0;

  let right = n - 1,
    bottom = n - 1;

  while (counter <= number) {
    // fill the row in which start is pointing
    // row --> left to right
    for (let i = left; i <= right && counter <= number; i++) {
      resultMat[start][i] = counter++;
    }
    start++;

    // col --> up to down
    for (let i = start; i <= bottom && counter <= number; i++) {
      resultMat[i][right] = counter++;
    }
    right--;

    // row --> right to left
    for (let i = right; i >= left && counter <= number; i--) {
      resultMat[bottom][i] = counter++;
    }
    bottom--;

    //col --> down to up
    for (let i = bottom; i >= start && counter <= number; i--) {
      resultMat[i][left] = counter++;
    }
    left++;
  }

  // console.log(resultMat);
  resultMat.forEach((row) => console.log(row.join(" ")));
}

spiralMat(3);

//! =========================================================
/* 
1 2 1 
2 3 2
1 2 1 
*/
function centerDistancePattern(n) {
  let center = Math.floor(n / 2);
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      // manhattan distance
      let distance = Math.abs(center - i) + Math.abs(center - j);
      let number = n - distance;
      row += number + " ";
    }
    console.log(row);
  }
}

// centerDistancePattern(5);
