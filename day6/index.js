/** Activity1 : Array Createing and access **/
console.log("Activity: 1");

const nums = [1, 2, 3, 4, 5];

console.log(nums);

console.log(`=> First Element: ${nums[0]}`);
console.log(`=> Last Element: ${nums[nums.length - 1]}`);

console.log("__________________________________\n");

/** Activity2 : Array Methods basic**/
console.log("Activity: 2");

console.log(nums);

nums.push(6);
console.log("=> used push method to add new item at the end: " + nums);
nums.pop();
console.log("=> used pop method to remove last element: " + nums);
nums.shift();
console.log("=> used shift method to remove first element: " + nums);
nums.unshift(8);
console.log("=> used unshift method to add new item at the beginning: " + nums);

console.log("__________________________________\n");

/** Activity3 : Array Methods intermediate**/
console.log("Activity: 3");

console.log(nums);

const doubleArray = nums.map((num) => num * num);
console.log("=> used map method: " + doubleArray);

const evenArray = nums.filter((num) => {
  if (num % 2 === 0) return num;
});
console.log("=> used filter method : " + evenArray);

const totalSum = nums.reduce((accumelator, currentvalue) => {
  return accumelator + currentvalue;
}, 0);

console.log("=> used reduce method : " + totalSum);

console.log("__________________________________\n");

/** Activity4 : Array iteration**/
console.log("Activity: 4");

console.log("Logging Each Element using for loop: ");
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

console.log("Logging Each Element using foreach loop: ");

nums.forEach((num) => console.log(num));

console.log("__________________________________\n");

/** Activity5 : Multi-dimensional Array**/
console.log("Activity: 5");

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);

console.log("\nAccessing matrix elements: ");
console.log(`In matrix 2nd Row and 1st column has value ${matrix[1][0]}`);
console.log(`In matrix 1st Row and 3rd column has value ${matrix[0][2]}`);
console.log(`In matrix 3rd Row and 3rd column has value ${matrix[2][2]}`);

console.log("__________________________________\n");