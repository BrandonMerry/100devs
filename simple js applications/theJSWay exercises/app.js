// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.



let turn;
for (turn = 1; turn <= 10; turn++) {
  console.log(turn);
}


let turn = 1;
while (turn <= 10) {
  console.log(turn);
  turn++;
}

// When it's done, improve it so that the number of turns is given by the user.

let turn = "";
while (turn !== "x") {
  turn = prompt("Type a letter or X to exit:");
  console.log(turn)
}


// ***************************** Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }

  }

//   Improve the program so that it also shows odd numbers. 
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
  }

// Improve it again to replace the initial number 1 by a number given by the user.
const start = parseInt(prompt("enter a number"));

for (let i = start; i <= start + 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
      }
      else {
          console.log(`${i} is odd`);
      }
    }

    // the short way of doing it 
    
        const start = parseInt(prompt("enter offset"));
        for (let i = start; i < start + 10; i++) {
            console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
        }

// ***************************** Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

let i = Number(prompt('Pick a number'))
while (i >= 100) {
    i =  prompt('Pick another number')
}

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let i = Number(prompt('Pick a number'))
while (i >= 100 || i <= 50) {
    i =  prompt('Pick another number')
}
