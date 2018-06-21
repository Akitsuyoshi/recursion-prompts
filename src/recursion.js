/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {
  if (n < 0) return null;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = (sum = function (array) {
  if (!array.length) return 0;

  return Number(array[0] + sum(array.slice(1)));
});

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
  if (!array.length) return 0;

  for (let i of array) {
    let current = i;
    if (Array.isArray(i)) {
      current = arraySum(current);
    }
    return current + arraySum(array.slice(1));
  }
};

// 4. Check if a number is even.
var isEven = function (n) {
  if (n === 0) return true;
  if (n === 1) return false;

  return isEven(Math.abs(n) - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
  if (Math.abs(n) == 1 || n == 0) return 0;
  if (n == 2) return 1;
  if (n == -2) return -1;

  return n > 0 ? n - 1 + sumBelow(n - 1) : n + 1 + sumBelow(n + 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {
  if (x === y || x + 1 === y) return [];

  if (x > y) {
    if (x === y + 1) return [];
    return [].concat(x - 1, range(x - 1, y));
  }

  return [].concat(x + 1, range(x + 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
  if (exp === 0) return 1;

  if (exp < 0) {
    return +((1 / base) * (base / base) * exponent(base, exp + 1)).toFixed(5);
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
  if (n === 1) return true;
  else if (n === 0) return false;
  else {
    if (Number.isInteger(n)) return powerOfTwo(n / 2);
    else return false;
  }
};

// 9. Write a function that reverses a string.
var reverse = function (string) {
  if (!string.length) return string;

  return (
    string[string.length - 1] + reverse(string.slice(0, string.length - 1))
  );
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
  let s = string.toLowerCase();
  s = s.replace(/ /g, "");

  if (s.length === 1) return true;
  if (s.length === 2) return s[0] == s[1];

  palindrome(s.slice(1, s.length - 1));

  return s[0] == s[s.length - 1];
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
  if (x === 0 && y === 0) return NaN;
  if (x === y) return 0;
  if (x < 0 && y < 0) return -modulo(-x, -y);
  if (x < 0 && y > 0) return -modulo(-x + y, y);
  if (x < y) return x;

  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function (x, y) {
  if (y === 0 || x === 0) return 0;

  if (x < 0 && y < 0) return -x + multiply(x, y + 1);
  if (x < 0 && y > 0) return x + multiply(x, y - 1);
  if (x > 0 && y < 0) return -x + multiply(x, y + 1);

  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function (x, y) {
  if (x === 0 && y === 0) return NaN;
  if (x === 0) return 0;
  if (x < 0 && y < 0) return divide(-x, -y);
  if (x < y) return 0;

  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
  // Base case:
  if (x <= 0 || y <= 0) return null

  const innerGcd = (a, b) => {
    if (x > 0 && y === 0) return x;
    if (x === 0 && y > 0) return y;

    return (a % b === 0) ? b : gcd(b, a % b);
  };

  return innerGcd(x, y);
};


// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
  // Base case:
  if (str1 === "" && str2 === "") return true;

  compareStr(str1.slice(1), str2.slice(1));

  return str1 === str2;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
  // Base case:
  if (str.length === 1) return [str];

  return [].concat(str[0], createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // Base case:
  if (array.length <= 2) return [array[1], array[0]];

  return [].concat(array[array.length - 1], reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (elem, length) {
  // Base case:
  let result = [];
  if (length === 1) {
    if (typeof elem === "object") return elem;
    return [elem];
  }
  if (Array.isArray(elem)) {
    result.push(elem, buildList(elem, length - 1));
    return result;
  }

  return result.concat(elem, buildList(elem, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
  // Base case:
  if (typeof n === "string") {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n;
  }

  let result = [];
  for (let i = 1; i <= n; i++) {
    let current = i.toString();

    result.push(fizzBuzz(current));
  }
  return result;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
  // Base case:
  if (array.length === 1) {
    return array[0] === value;
  }

  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    result += countOccurrence([current], value);
  }

  return result;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
  // Base case:
  if (array.length === 1) {
    return callback(array);
  }

  return [].concat(callback(array[0]), rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function (obj, key) {
  if (typeof obj !== "object") {
    return 0;
  }

  let count = 0;
  for (let eachKey of Object.keys(obj)) {
    let current = obj[eachKey];

    if (key === eachKey) count++;
    count += countKeysInObj(current, key);
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
  // Base case:
  if (typeof obj !== "object") {
    return obj === value;
  }

  // Recursive case:
  let count = 0;
  for (let key of Object.keys(obj)) {
    let currentValue = obj[key];

    count += countValuesInObj(currentValue, value);
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, oldKey, newKey) {
  // Base case:
  if (typeof obj !== "object") {
    return obj;
  }

  // Recursive case:
  for (let key of Object.keys(obj)) {
    let current = obj[key];

    let val = replaceKeysInObj(current, oldKey, newKey);
    if (key === oldKey) {
      obj[newKey] = val;
      delete obj[oldKey];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {
  const sum = (a, b) => a + b;
  if (Array.isArray(n)) {
    return n.reduce(sum, 0);
  }
  if (n <= 0) return null;

  // Recursive case:
  // let current = fibonacci(n - 1) + fibonacci(n - 2)
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    let nextNum = fibonacci(result.slice(i - 2, i));
    result.push(nextNum);
  }

  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {
  if (!Array.isArray(array)) return array.toUpperCase();

  let result = [];
  for (let i of array) {
    let current = capitalizeWords(i);
    result.push(current);
  }
  return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {
  if (!Array.isArray(array)) return array[0].toUpperCase() + array.slice(1);

  let result = [];
  for (let i of array) {
    let current = capitalizeFirst(i);
    result.push(current);
  }
  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
  // Base case:
  if (typeof obj !== "object") {
    return typeof obj === "number" && obj % 2 === 0 ? obj : 0;
  }

  let result = 0;
  for (let key of Object.keys(obj)) {
    let current = nestedEvenSum(obj[key]);
    result += current;
  }
  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
  // Base case:
  if (!Array.isArray(array)) return array;
  if (!array.length) return null;

  let [first, ...rest] = array;

  return [].concat(flatten(first), flatten(rest)).filter(v => v !== null);
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (str, obj) {
  // Base case:
  if (obj) {
    if (obj.hasOwnProperty(str)) return obj[str]++;
    return (obj[str] = 1);
  }
  let result = {};

  for (let char of str) {
    Object.assign(result, letterTally(char, result));
  }
  return result;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
  // Base case:
  if (!Array.isArray(list)) return null;

  let result = [];
  let last;
  for (let i of list) {
    last === i ? result.push(compress(i)) : result.push(i);
    last = i;
  }
  return result.filter(val => val !== null);
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
  // Base case:
  if (array.length <= 1) return [].concat(array, aug);

  return array.map(val => {
    let current = augmentElements(val, aug);

    return current;
  });
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
  if (!Array.isArray(array) && array === 0) return null;

  let result = [];
  let last;
  for (let i of array) {
    last === i ? result.push(minimizeZeroes(i)) : result.push(i);
    last = i;
  }
  return result.filter(val => val !== null);
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
  // Base case:
  if (!array.length) return null;
  if (!Array.isArray) return array;

  let [first, ...rest] = array;
  const ab = Math.abs;

  return []
    .concat(ab(first), -ab(rest[0]), alternateSign(rest.slice(1)))
    .filter(val => val !== null);
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
  // Base case:
  // Base case:
  if (/^\d{1}$/.test(str)) {
    const numberInString = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine"
    };
    return numberInString[str];
  }
  if (!str.includes(' ')) {
    return str;
  }
  let result = '';

  for (let i of str.split(' ')) {
    result += numToText(i) + ' ';
  }
  return result.trim();
};

// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {

};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function (array, target, min, max) {};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {};