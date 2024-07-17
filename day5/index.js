/** Activity1 : Function Declartion **/
console.log("Activity: 1");

let number = 5;

console.log(`${number} is ${isEvenOrOdd(number)} number.`);
console.log(`Squre of ${number} is ${square(number)}.`);

function isEvenOrOdd(number) {
  return number % 2 === 0 ? "even" : "odd";
}

function square(number) {
  return number * number;
}

console.log("__________________________\n");

/** Activity2 : Function Expression **/
console.log("Activity: 2");

let a = 5;
let b = 7;
const max = function (a, b) {
  return a > b ? a : b;
};
console.log(`Numbers are ${a} and ${b}, between these two numbers max is ${max(a, b)} number\n`);

let fname = "John";
let lname = "dee";
const fullname = function (str1, str2) {
  return str1 + " " + str2;
};
console.log(
  `first name : ${fname} 
  \nlastname : ${lname}
  \nfullname ${fullname(fname, lname)}\n`
);

console.log("__________________________\n");

/** Activity3 : Arrow Expression **/
console.log("Activity: 3");

let num1 = 5;
let num2 = 15;

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(`${num1} + ${num2} = ${sum(num1, num2)}\n`);

const str = "#John-dee";
const char = "#";
const containsChar = (str, char) => str.includes(char);

console.log(`${str} contains a ${char} : ${containsChar(str, char)}`);

console.log("__________________________\n");

/** Activity4 : Function paramter and default value **/
console.log("Activity: 4");

const multiple = function (c, d = 1) {
  return c * d;
};

console.log(`Multilicaton  : ${multiple(5)}`);

const grettings = function (name, age = 25) {
  return `Hello ${name} your age is ${age}!!!`;
};

console.log(grettings("John"));

console.log("__________________________\n");

/** Activity5 : Higher-order functions **/
console.log("Activity: 5");

const createWish = function (func, num) {
    for (let i = 1; i <= num; i++) {
        func();
    }
};
function wish() {
  console.log("Hello!!!");
}
createWish(wish, 5);

const getTax = function (divide, multiply, price) {
    return divide(multiply(price));
};
function divide(num) {
  return num / 100;
}
function multiply(num) {
  return num * 18;
}
let price = 50000;

console.log(`Price is ${price} and tax you have to pay is ${getTax(divide, multiply, price)}`);

console.log("__________________________\n");