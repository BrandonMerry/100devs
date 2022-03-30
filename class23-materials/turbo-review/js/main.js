// *Variables*
// Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question

const str = "is the a question?"

alert(str.endsWith('?'));



//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let aJoke = "I want to be a jr. dev"

console.log( aJoke.replaceAll('jr. dev', 'software engineer'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function childGames(){
    let p1 = Math.random();
    if(p1<.33){
        return 'rock'
    }else if( .66 < p1 ){
        return 'paper'
    }else{
        return 'scissors'
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function choice(playerChoice){
    let botChoice = childGames()
    if( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'scissors' && botChoice === 'paper') ||(playerChoice === 'paper' && botChoice ==='rock')){
        alert("you're the winner!")
    } 
    else if ((playerChoice === botChoice)){
        alert("Tie game")
    }
    else {
        alert("You've lost")
    }
}

choice('paper')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

