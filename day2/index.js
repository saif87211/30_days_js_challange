/** Activity1 : Arithmatic operators **/
console.log("Activity: 1");
let num1 = 44;
let num2 = 2;

console.log("Num 1 = " + num1);
console.log("Num 2 = " + num2);

const sum = num1 + num2;
const subtract = num1 - num2;
const mutliply = num1 * num2;
const divide = num1 / num2;
const remainder = num1 % num2;

console.log("Additaion: " + sum);
console.log("Subtraction: " + subtract);
console.log("Multiplication: " + mutliply);
console.log("Divison: " + divide);
console.log("Remainder: " + remainder);
console.log("_________________________");

/** Activity2 : Assignement operators **/
console.log("Activity: 2");

let num3 = 45;
console.log("Num3 = " + num3);

num3 += num1;
console.log("Num3 after using += operator with Num1: " + num3);

num3 -= num2;
console.log("Num3 after using -= operator with Num2: " + num3);
console.log("_________________________");

/** Activity3 : Comparision operators **/
console.log("Activity: 3");

let lessThan = num1 < num2;
console.log("num1 < num2: " + lessThan);

let greaterThan = num1 > num2;
console.log("num1 > num2: " + greaterThan);

let num4 = 30;
let num5 = 30;

console.log("Num 4: " + num4);
console.log("Num 5: " + num5);

let lessThanOrEqualto = num4 <= num5;
console.log("num4 <= num5: " + lessThanOrEqualto);

let greaterThanOrEqualto = num4 >= num5;
console.log("num4 >= num5: " + greaterThanOrEqualto);

let num6 = 0;
let num7 = "0";
console.log("Num6 = " + num6 + ", typeof Num4 : " + typeof num6);
console.log("Num7 = '" + num7 + "', typeof Num5 : " + typeof num7);

let equalityPerator = num6 == num7;
console.log("Eqaulity operator num4 == num5 : " + equalityPerator);

let strictEqualityPerator = num6 === num7;
console.log(
  "Strict eqaulity operator num4 === num5 : " + strictEqualityPerator
);

console.log("_________________________");

/** Activity4 : Logical operators **/
console.log("Activity: 4");

let x = 10;
let y = 4;
console.log("x = " + x);
console.log("y = " + y);

let logicalAnd = x < 5 && y < 3;
let logicalOr = x < 20 || y < 2;
let logicalNot = !(x > y);

console.log("Logical And: x < 5 && y < 3 = " + logicalAnd);
console.log("Logical OR: x < 20 || y < 2 = " + logicalOr);
console.log("Logical Not: !( x > y) = " + logicalNot);
console.log("_________________________");

/** Activity5 : Ternary operator **/
console.log("Activity: 5");
let number = -10;
console.log("Number = " + number);

let answer = number > 0 ? "Positive" : "Negative";
console.log("Number is " + answer);

console.log("_________________________");
