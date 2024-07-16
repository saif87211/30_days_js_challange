/** Activity1 : For loop **/
console.log("Activity: 1");

console.log("Print 1 to 10: ");
for (let i = 1; i < 11; i++) {
  console.log(i);
}

let number = 5;
console.log(`\n${number} table: `);

for (let i = 1; i < 11; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

console.log("__________________________\n");

/** Activity2 : While loop **/
console.log("Activity: 2");

let i = 0;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}

console.log(`sum of 1 to 10 is ${sum}\n`);

console.log("Print number 10 to 1: ");
let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}

console.log("__________________________\n");

/** Activity3 : Do...While loop **/
console.log("Activity: 3");

console.log('Print 1 to 5 using do while loop.');
let k = 1;
do {
  console.log(k);
  k++;
} while (k < 6);

let num = 4;
console.log(`factorial of ${num} is ...`);
let factorial = 1;
do {
  factorial *= num--;
} while (num > 0);

console.log(factorial);

console.log("__________________________\n");

/** Activity4 : Nested loops **/
console.log("Activity: 4");

for (let p = 0; p < 6; p++) {
    let stars = "";
    for (let q = 0; q < p; q++) {
        stars += "* ";
    }
    console.log(stars);
}
console.log("__________________________\n");


/** Activity5 : Loop control statement **/

console.log("Activity: 5");

console.log('Print 1 to 10 numbers and skip number is 5');
for (let r = 1; r < 11; r++) {
    if (r === 5) {
    continue;
  }
  console.log(r);
}

console.log("\n");

console.log('Print 1 to 10 numbers and break loop if number is 7');
for (let s = 1; s < 11; s++) {
  if (s === 7) {
    break;
  }
  console.log(s);
}

console.log("__________________________\n");