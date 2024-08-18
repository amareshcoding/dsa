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
        bag += ' *';
      } else if (j === n) {
        bag += ' *';
      } else if (i === j) {
        bag += ' *';
      } else if (n - j === i - 1) {
        bag += ' *';
      } else {
        bag += '  ';
      }
    }
    console.log(bag);
  }
}
let n = 7;
patternPrint(n);

// Pattern Print 2
