let score = "33"
let value = "33abc"
let temp =null;
console.log(typeof temp); // string
let convertedTemp = Number(temp);
console.log(convertedTemp); // 0 (because null is converted to 0)
console.log(typeof convertedTemp); // number

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
let valueInNumber2 = Number(value);
console.log(valueInNumber2); // NaN (Not a Number) because "33abc" cannot be converted to a number
console.log(valueInNumber); // 33 (string "33" is converted to number 33)

/* 
  The above examples demonstrate how different types of values are converted to numbers in JavaScript.
  - The string "33" is successfully converted to the number 33.
  - The string "33abc" cannot be converted to a number, resulting in NaN.
  - The null value is converted to 0.
  - for the boolean values, true is converted to 1 and false is converted to 0.
  - The undefined value is converted to NaN.(not a number)
  - string cant be converted to number
*/

let isLoggedIn = "yashi";
let booleanValue = Boolean(isLoggedIn);
log(booleanValue); // true (non-empty string is truthy)

//1 ==> true; 0 => false;
// "" => false; "abc" => true;

let someNumber = 33
let StringNumber = String(someNumber);
console.log(StringNumber); // "33" (number is converted to string)
