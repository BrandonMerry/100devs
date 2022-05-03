// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// When it's done, improve it so that the number of turns is given by the user.

let turn = 1;
while(turn <= 10){
    console.log(turn);
    turn++
}

const userPickedSpins = Number(prompt('select the number of spins you would like the carousel to rotate: '))

for(let number =1; number <=userPickedSpins; number++){
    console.log('the carousel has reached ${number} rotations')
}

// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let input = '';
while(input !=='yes' && input !=='no'){
    input = prompt('do you wnt to play a game... lets play a game called Neither yes, nor No')
} console.log("HA! You've lost!")


// Write a program that asks the user for a number, then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let number = 0;
while(number<2 || number > 9){
    number = Number(prompt('enter a number that is below 10 and above 1'));
} 
console.log(`here is a table of multiples corresponding to your chose number`);

for(let i=1;i<=10;i++){
    console.log(`${number} x${i} = ${number *i}`)
}


// fizzbuzz 

for( let i =1; i<=100;i++){
    if(i %3 === 0 && i % 5 ===0){
        console.log("fizzBuzz")
    }else if (i %5 === 0){
        console.log("Buzz")
    }else if ( i % 3 === 0 ){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}