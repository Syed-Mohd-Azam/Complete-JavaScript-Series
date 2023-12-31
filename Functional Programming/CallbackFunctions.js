// Callback Functions

// In JavaScript, a callback function is a function that is passed into another funcion as an argument.This function can then be invoked at a later stage of time.
// Since, in JavaScript functions are considered as values. That is why they are also called as First Class Functions.

printFirstName("Steve", printLastName);
function printFirstName(firstName, callbackFunction) {
  console.log(firstName);
  callbackFunction("Jobs");
}

function printLastName(lastName) {
  console.log(lastName);
}

// Another example of callback function

const isEven = (num) =>
  num % 2 === 0 ? "Yes! Number is Even" : "No! Number is Odd";

const evenOdd = (callback, num) => callback(num);

console.log(evenOdd(isEven, 8));
