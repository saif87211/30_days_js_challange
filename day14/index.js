/** Task:1 **/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    [this.fname, this.lname] = name.split(" ");
  }
  greet() {
    console.log(`Hi! I am ${this.name} and i am ${this.age} years old.`);
  }
  static greeting(name, age) {
    console.log(`Hi! I am ${name} and i am ${age} years old.`);
  }
  get fullname() {
    return `${this.fname} ${this.lname}`;
  }
  set updateName(name) {
    this.name = name;
    [this.fname, this.lname] = name.split(" ");
  }
}

const john = new Person("John Soap", 25);
john.greet();

/** Task:2 **/
Person.prototype.updateFieds = function (name, age) {
  this.age = age || this.age;
  this.name = name || this.name;
};

john.updateFieds("John Soap Mactevish", 24);
john.greet();

/** Task:3 **/
class Student extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
  }
  getStudentId() {
    return this.studentId;
  }
  greet() {
    console.log(
      `Hi! I am ${this.name} and i am ${this.age} years old. Here is my student id: ${this.studentId}.`
    );
  }
  static getStudnetCount() {
    return Student.studentCount;
  }
}

const sam = new Student("Sam Kobalt", 20, 561);
console.log(sam);
console.log(`Student ID: ${sam.getStudentId()}`);

/** Task:4 **/
sam.greet();

/** Task:5 **/
Person.greeting("Saif", 24);

/** Task:6 **/
const ryan = new Student("Ryan roy", 23, 871);
console.log(Student.getStudnetCount());

/** Task:7 **/
const lance = new Person("Lance Lot", 28);
console.log(lance.fullname);

/** Task:8 **/
const siler = new Person("Slier Bridge", 29);

siler.updateName = "Siler Bridgestone";

siler.greet();

/** Task:9 **/
class Account {
  #balance = 0;

  constructor(customerName, amountDeposit) {
    this.customerName = customerName;
    this.#balance = amountDeposit || 0;
    console.log(`Welcome ${customerName}`);
  }

  get balance() {
    return this.#balance;
  }
  get accountInfo() {
    return `Customer Name: ${this.customerName}, 
            Balance : ${this.#balance}`;
  }
  set deposit(amount) {
    this.#balance += amount;
    console.log(`Credited ${amount}`);
}
set withdrawl(amount) {
    this.#balance -= amount;
    console.log(`Debited ${amount}`);
  }
}

/** Task:10 **/
const jackAccount = new Account("Jack Anrich", 2500);

console.log(jackAccount.accountInfo);
jackAccount.deposit = 15000;
console.log(jackAccount.accountInfo);
jackAccount.withdrawl = 250;
console.log(jackAccount.accountInfo);
