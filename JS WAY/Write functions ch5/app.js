// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }

  console.log(sayHello(firstName, lastName));

//   Complete the following program so that the square1() and square2() functions work properly.
// Square the given number x
function square1(x) {
    return x * x; // Or: Math.pow(x,2);
  }
  
  // Square the given number x
  const square2 = x => x * x; // Or: Math.pow(x,2);
  // Less concise solution with function body
  /* const square2 = x => {
    return x * x;
  }; */
  
  console.log(square1(0)); // Must show 0
  console.log(square1(2)); // Must show 4
  console.log(square1(5)); // Must show 25
  
  console.log(square2(0)); // Must show 0
  console.log(square2(2)); // Must show 4
  console.log(square2(5)); // Must show 25
  
  for (let i = 0; i <= 10; i++) {
    console.log(square1(i));
  }

//   Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

function min(a, b) {
    if (a < b) {
      return a;
    }
    return b;
  } 

  console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1

// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// Return calculation result
function calculate(leftNumber, operation, rightNumber) {
    let result;
    switch (operation) {
      case "+":
        result = leftNumber + rightNumber;
        break;
      case "-":
        result = leftNumber - rightNumber;
        break;
      case "*":
        result = leftNumber * rightNumber;
        break;
      case "/":
        result = leftNumber / rightNumber;
        break;
    }
    return result;
  }
  
  console.log(calculate(4, "+", 6)); // Must show 10
  console.log(calculate(4, "-", 6)); // Must show -2
  console.log(calculate(2, "*", 0)); // Must show 0
  console.log(calculate(12, "/", 0)); // Must show Infinity


//   Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Return the circumference of a circle
function circumference(radius) {
    return 2 * radius * Math.PI;

// Return the area of a circle
function area(radius) {
    return Math.pow(radius, 2) * Math.PI;

    const r = Number(prompt("Enter the circle radius:"));
    console.log(`Its circumference is ${circumference(r)}`);
    console.log(`Its area is ${area(r)}`)