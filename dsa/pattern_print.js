// Pattern Print 1
// *           *
// * *       * *
// *   *   *   *
// *     *     *
// *   *   *   *
// * *       * *
// *           *

function patternPrint(n) {
  for (let i = 1; i <= n; i++) {
    let bag = '';
    for (let j = 1; j <= n; j++) {
      if (j === 1) {
        // print the left wall
        bag += ' *';
      } else if (j === n) {
        // print the right wall
        bag += ' *';
      } else if (i === j) {
        // print the left to right diagonal
        bag += ' *';
      } else if (n - j === i - 1) {
        // print the right to left diagonal
        bag += ' *';
      } else {
        // filling empty spaces
        bag += '  ';
      }
    }
    console.log(bag);
  }
}
let n = 7;
patternPrint(n);

// Pattern Print 2
