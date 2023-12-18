// loops are the statements that we can use to control the flow of the program and do some repetitive tasks.

// for loop

for (var a = 0; a < 10; a++) {
  console.log("Loop Iteration", a + 1);
}
// you have an array and you have to square each element of that array.

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var index = 0; index < num.length; index++) {
  console.log(num[index] * num[index]);
}

console.log("The value of a is ", a);
console.log("The value of index is ", index);
