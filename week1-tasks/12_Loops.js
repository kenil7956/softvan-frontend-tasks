// Loops: while and for

// for
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("The sum of the numbers is: " + sum);

// while
let num = 1;

while (num <= 10) {
  console.log(num);
  num++;
}
