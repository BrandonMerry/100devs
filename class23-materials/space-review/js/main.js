//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let sqSum = [8,5,6,7];

// acc & c are parameters / the "0" tells to start at a number, not a string

alert(sqSum.reduce((acc,c) => acc + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArr = sqSum => sqSum.map(n=> n * n)


//Create a function that takes string
//Print the reverse of that string to the console


function revStr(str){
    return str.split('').reverse().join('');
}

revStr("Champion")


//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindrome = str => console.log(str === str.split('').reverse().join(''))