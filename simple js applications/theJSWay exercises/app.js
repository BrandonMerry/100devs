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


// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }
  }

//   Improve the program so that it also shows odd numbers. 


// Improve it again to replace the initial number 1 by a number given by the user.