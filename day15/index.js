/** Task:1 **/
const getPrintFun = () => {
  const username = "John@123";
  return () => {
    console.log(username);
  };
};

const printFunc = getPrintFun();
printFunc();

/** Task:2 **/
const counterFunv = function () {
  let counter = 0;
  function incremnet() {
    counter++;
  }
  return {
    incremnet,
    getCounter() {
      return counter;
    },
  };
};

const counter = counterFunv();
counter.incremnet();
console.log(counter.getCounter());

/** Task:3 **/
const generateUniqId = () => {
  let id = Math.floor(Math.random() * 1000);
  return () => {
    return id++;
  };
};

const id = generateUniqId();
console.log(id());
console.log(id());
console.log(id());

/** Task:4 **/
const userGreet = (name) => {
  return () => {
    console.log(`Hello ${name}!!!...`);
  };
};

const john = userGreet("John");
john();
const sam = userGreet("sam");
sam();

/** Task:5 **/
const getIndex = (i) => () => {
  console.log(i);
};

const arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = getIndex(i);
}
const index = arr[0];
index(); //or
arr[4]();
arr[2]();

/** Task:6 **/
import { collcetion } from "./collection.js";
const personNames = collcetion("John", "Sam", "Jack");
personNames.add("Kane");
personNames.add("Tylar");
personNames.add("Chris");
personNames.add("James");
console.log(personNames.getList());
personNames.removeLast();
console.log(personNames.getList());

/** Task:7 **/
const memorise = (fn) => {
  const obj = [];
  return (item) => {
    obj.push(fn(item));
    return obj;
  };
};
const square = (n) => {
  return n * n;
};
const memorizeFun = memorise(square);
console.log(memorizeFun(5));
console.log(memorizeFun(3));
console.log(memorizeFun(8));

/** Task:8 **/
const factorial = (num) => {
  let result = 1;
  const inner = (n) => {
    if (n === 0 || n === 1) {
      return result;
    }
    result *= n;
    return inner(n - 1);
  };
  return inner(num);
};

const findFactorialOf5 = factorial(3);
console.log(findFactorialOf5);
