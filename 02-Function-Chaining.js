let sum = 0;
let numbers = [2, 4, 6, 10, 16];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] - 1;
  if (numbers[i] % 3 === 0) {
    sum += numbers[i];
  }
}

let reduced = numbers.map(n => {
  return n - 1;
});
let divisible = reduced.filter(n => {
  return n % 3 === 0;
});
let sum = divisible.reduce((acc, n) => {
  return acc + n;
}, 0);

let sum = numbers
  .map(n => {
    return n - 1;
  })
  .filter(n => {
    return n % 3 === 0;
  })
  .reduce((acc, n) => {
    return acc + n;
  }, 0);

let sum = numbers
  .map(subtractOne)
  .filter(isDivisibleBy3)
  .reduce(add, 0);
