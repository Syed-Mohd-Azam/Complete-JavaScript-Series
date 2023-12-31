// Higher Order Functions

// Higher Order Function is a function that receives a function as an argument or returns the function as output.

const arrayOne = [1, 2, 3, 4, 5];

const squaredArrayOne = [];

for (const value of arrayOne) {
  squaredArrayOne.push(value * value);
}

console.log(squaredArrayOne);

// map() --> higher order function

// map() will loop through every element of your array and will perform specific operations that you have provided.
// map() returns an array.

const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredArrayTwo = arrayTwo.map((value) => value * value);

console.log(squaredArrayTwo);

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrToDollor = 80;
const dollortransactions = transactions.map((inr) =>
  Number((inr / inrToDollor).toFixed(1))
);
console.log(dollortransactions);
// forEach() --> a higher order function.

// forEach() will loop through every element of your array and will perform specific operations that you have provided.
// Instead of map, forEach() does not return any value, it only performs the operations which has given to it.

const values = [1, 2, 3, 4, 5];
const tripple = [];
values.forEach((value) => tripple.push(value * value * value));
console.log(tripple);

// filter() --> a higher order function

// filter() method returns a new array and it contains only those elements of given array that satisfies the condition provided in callback function.

// Problem :-> You have to check for even numbers in an array and put them in separate array.

const numbers = [1, 2, 20, 35, 12, 17, 46];
const filtered = [];
for (const value of numbers) {
  if (value % 2 === 0) filtered.push(value);
}
console.log("Filtered Array is : ", filtered);

// using filter() method

const filteredValues = numbers.filter((value) => value % 2 === 0);
console.log("Filtered Values using filter() method : ", filteredValues);

// find() --> a higher order function returns the first element of an array that satisfies the condition.

const realValues = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const findValue = realValues.find((value) => value < 0);

// findIndex()

const firstIndex = realValues.findIndex((value) => value < 0);
console.log(firstIndex); // 4th index

// some() method --> a higher order function which returns true if even single element satisfies the condition provided in callback function.

const multipleValues = [-1000, -3000, -4000, 2000, -898, -3800, -4500];
console.log(multipleValues.some((value) => value > 0));

// every() method --> a higher order function which returns true if all the elements of an array satisfies the condition provided in the callback function.

const negativeValues = [-1000, -2000, -3000, -4000, -5000];
console.log(negativeValues.every((value) => value < 0));

// reduce() method --> a higher order function.

const num = [1, 2, 3, 4, 10];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum = sum + num[i];
}
console.log(sum);

// Reduce() method --> a higher order function which returns a single value.

const singleValueSum = num.reduce((sum, value) => sum + value, 0);
const singleValueProduct = num.reduce((prod, value) => prod * value, 1);
console.log(singleValueSum);
console.log(singleValueProduct);

// Chaining of Methods

let data = [
  {
    name: "A",
    age: 14,
    gender: "M",
  },
  {
    name: "B",
    age: 34,
    gender: "M",
  },
  {
    name: "C",
    age: 24,
    gender: "F",
  },
  {
    name: "D",
    age: 44,
    gender: "F",
  },
  {
    name: "E",
    age: 44,
    gender: "M",
  },
  {
    name: "I",
    age: 28,
    gender: "F",
  },
  {
    name: "G",
    age: 36,
    gender: "M",
  },
  {
    name: "H",
    age: 47,
    gender: "F",
  },
];

// Age of all the males.

console.log(data.filter((obj) => obj.gender === "M").map((value) => value.age));

// Another Example on Chaining The methods.
// From the given array find out the positive amounts and calculate their sum.
const money = [1000, 3000, 4000, 2000, -898, 3800, 4500];
console.log(
  money.filter((value) => value > 0).reduce((sum, value) => sum + value, 0)
);
