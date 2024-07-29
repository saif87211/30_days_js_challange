/** Task:1 **/
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(`Factorial of 5 is ${factorial(5)}`);
console.log(`Factorial of 2 is ${factorial(2)}`);
console.log(`Factorial of 7 is ${factorial(7)}`);

/** Task:2 **/
function fibonaucci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonaucci(n - 1) + fibonaucci(n - 2);
  }
}
console.log(`9th Fibonacci is ${fibonaucci(9)}`);
console.log(`5th Fibonacci is ${fibonaucci(5)}`);
console.log(`6th Fibonacci is ${fibonaucci(6)}`);

/** Task:3 **/
function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  let sum = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return sum + sumOfArray(arr);
}
console.log(sumOfArray([0, 2, 8, 3]));
console.log(sumOfArray([8, 2, 5, 5]));
console.log(sumOfArray([8, 9, 2, 9]));

/** Task:4 **/
function maxInArray(arr) {
  if (arr.length === 1) return arr[0];

  const max = maxInArray(arr.slice(1));
  return arr[0] > max ? arr[0] : max;
}
console.log(`Max = ${maxInArray([0, 2, 8, 43])}`);
console.log(`Max = ${maxInArray([0, 2, 18, 5])}`);
console.log(`Max = ${maxInArray([5, 8, 2, 12])}`);

/** Task:5 **/
function reverseString(str) {
  if (str.length <= 0) return str;
  return reverseString(str.substring(1)) + str[0];
}

console.log(`Reverse of India is ${reverseString("India")}`);
console.log(`Reverse of King is ${reverseString("King")}`);
console.log(`Reverse of Bounty is ${reverseString("Bounty")}`);

/** Task:6 **/
function checkPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return checkPalindrome(str.slice(1, -1));
}

console.log(`NAN is palindrome ${checkPalindrome("NAN")}`);
console.log(`MAM is palindrome ${checkPalindrome("MAM")}`);
console.log(`CAR is palindrome ${checkPalindrome("CAR")}`);

/** Task:7 **/
function binarySearch(arr, target, low, high) {
  if (high >= low) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      return binarySearch(arr, target, low, mid - 1);
    }

    return binarySearch(arr, target, mid + 1, high);
  }
  return -1;
}
const arr1 = [2, 5, 8, 15, 25, 28, 30, 45];
console.log(arr1);
console.log(`Index of 5 is ${binarySearch(arr1, 5, 0, arr1.length - 1)}`);
console.log(`Index of 30 is ${binarySearch(arr1, 30, 0, arr1.length - 1)}`);
console.log(`Index of 15 is ${binarySearch(arr1, 15, 0, arr1.length - 1)}`);

/** Task:8 **/
function countOccurrences(arr, target) {
  if (arr.length === 0) return 0;
  if (arr[0] === target) {
    return 1 + countOccurrences(arr.slice(1), target);
  } else {
    return countOccurrences(arr.slice(1), target);
  }
}
const arr2 = [2, 8, 9, 8, 3, 1, 2, 6, 8, 6];
console.log(`Occurnec of 2 in array is ${countOccurrences(arr2, 2)}`);
console.log(`Occurnec of 8 in array is ${countOccurrences(arr2, 8)}`);
console.log(`Occurnec of 3 in array is ${countOccurrences(arr2, 3)}`);
