/** Activity1 : Template Literals**/
console.log("Activity: 1");

const person = {
  name: "John Dee",
  age: 25,
  hobbies: ["Reading", "Coding", "Travelling"],
};

const presonInfo = `Preson name is ${person.name} and age is ${person.age}.`;

console.log(presonInfo);

console.log(`Name of the students is ${person.name}, it's hobbies are
    - ${person.hobbies[0]}
    - ${person.hobbies[1]}
    - ${person.hobbies[2]}
    `);
console.log("__________________________________\n");

/** Activity2 : Destructing**/
console.log("Activity: 2");

const arr = [2, 45, 89, 68, 94];
console.log(arr);
const [num1, num2] = arr;

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}\n`);

const book = {
  title: "The Autobiography of a Stock",
  author: "Manoj Arora",
  publishedYear: 2019,
};
console.log("book = ");
console.log(book);

const { title, author } = book;
console.log(`Title of the book: ${book.title} 
    Author name: ${book.author}`);

console.log("__________________________________\n");

/** Activity3 : Spread and rest operators**/
console.log("Activity: 3");

const carsCollection1 = ["Avenger", "Voyager", "Mystique"];

const newCarsCollection = ["Ranger", "Escort", ...carsCollection1];

console.log(`Cars names: ${newCarsCollection}`);

function sum(...nums) {
  return nums.reduce((accumulator, currrentValue) => {
    return accumulator + currrentValue;
  }, 0);
}
console.log(`sum of ${arr} is ${sum(...arr)}`);
console.log(`sum of 5,4,2 is ${sum(5, 4, 2)}`);

console.log("__________________________________\n");

/** Activity4 : Default operators **/
console.log("Activity: 4");

function product(a, b = 1) {
  return a * b;
}

console.log(product(5, 2));
console.log(product(7));

console.log("__________________________________\n");

/** Activity5 : Enhanced object literals **/
console.log("Activity: 5");

const carModel = "Mercedes-Benz";
const engine = "1950 cc";
const speed = 210;
const carSpec = function () {
  console.log(`Car has ${engine} and ${speed} kmph top speed.`);
};

const car = { carModel, engine, speed, carSpec };

console.log("car:");
console.log(car);

const createStudent = function (name, age, maths, sci) {
  return {
    name,
    age,
    maths,
    sci,
    [`is${name}IsPassed`]: maths + sci > 64 ? "pass" : "fail",
  };
};

const john = createStudent("John Dee", 25, 50, 50);
console.log("john:");
console.log(john);

console.log("__________________________________\n");
