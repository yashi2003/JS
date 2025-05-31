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


// *****************operations******************
let val = 3;
let negval = -val;
console.log(negval); // -3 (negation of 3)

let str1 = "hello";
let str2 = "world";
let str3 = str1 + " " + str2;
console.log(str3); // "hello world" (string concatenation)

console.log("1" + 2); // "12" (string concatenation, number 2 is converted to string)
console.log(1 + 2 + "2"); // "32" (1 + 2 is evaluated first, resulting in 3, then concatenated with "2")

console.log(+true); // 1 (true is converted to number 1)

let num1, num2, num3;
num1 = num2 = num3 = 10;

let gameScore = 100;
gameScore++;
console.log(gameScore); // 101 (postfix increment, gameScore is incremented by 1)