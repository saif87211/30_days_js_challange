/** Activity1 : if-else statement **/
console.log("Activity: 1");

let number = -1;

console.log(`Number: ${number}`);

if (number > 0) {
  console.log("Number is Postive.");
} else if (number < 0) {
  console.log("Number is Negative.");
} else {
  console.log("Number is Zero.");
}

let age = 18;
console.log(`\nYour Age is : ${age}`);
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You can't vote becuse you are under age.");
}

console.log("__________________________");

/** Activity2 : Nested if-else statement **/
console.log("Activity: 2");

let num1 = 100;
let num2 = 60;
let num3 = 150;

let largestNum = 0;

console.log(`Num1 = ${num1}`);
console.log(`Num2 = ${num2}`);
console.log(`Num3 = ${num3}`);

if (num1 > num2) {
  if (num1 > num3) {
    largestNum = num1;
  } else {
    if (num3 > num2) {
      largestNum = num3;
    }
  }
} else {
  if (num2 > num3) {
    largestNum = num2;
  } else {
    if (num3 > num1) {
      largestNum = num3;
    }
  }
}
console.log(`${largestNum} is largest number among all given numbers`);

console.log("__________________________");

/** Activity3 : Switch case **/
console.log("Activity: 3");

let day = 4;

console.log(`Day = ${day}`);

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Please give number between 1 to 7.");
}

let marks = 50;

console.log(`You marks is ${marks}`);

let grade = "";

switch (true) {
  case marks >= 80:
    grade = "A";
    break;
  case marks >= 60 && marks <= 79:
    grade = "B";
    break;
  case marks >= 50 && marks <= 59:
    grade = "C";
    break;
  case marks >= 40 && marks <= 49:
    grade = "D";
    break;
  case marks >= 0 && marks <= 39:
    grade = "F";
    break;
  default:
    console.log("Please enter valid marks");
}

if (grade !== "") console.log(`You got ${grade} in subject.`);

console.log("__________________________");

/** Activity4 : Ternay Operator **/
console.log("Activity: 4");

let newNumber = 57;

let result = newNumber % 2 === 0 ? "even" : "odd";

console.log(`Number = ${newNumber}\n${newNumber} is ${result} number.`);

console.log("__________________________");

/** Activity5 : Combining Conditions **/
console.log("Activity: 5");

let year = 2024;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  } else {
    console.log(`${year} is leap year.`);
  }
} else {
  console.log(`${year} is not a leap year.`);
}

console.log("__________________________");