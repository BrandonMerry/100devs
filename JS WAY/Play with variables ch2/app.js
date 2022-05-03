// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

const userFirstName = prompt("Type your first name");
const userLastName = prompt("Type your last name");

alert(`Hello, ${userFirstName} ${userLastName}`);

// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

const price = Number(prompt("Enter the price of your item"));

const pricePlueVAT = price * 1.206

console.log(pricePlueVAT)

// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

const tempInF = Number(prompt("enter a temperature"));

let convertToC = tempInF * 9/5 + 32 

console.log(convertToC)

// Variable swapping
// Add the necessary code to swap the values of variables number1 and number2.

let number1 = 5;
let number2 = 3;

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);