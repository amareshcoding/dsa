function runProgram(input) {
  input = input.trim().split('\n');
  let n = +input[0];
  let arr = input[1]
    .trim()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  Name(n, arr);
}
function Name(n, arr) {}

if (process.env.USERNAME === '') {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
