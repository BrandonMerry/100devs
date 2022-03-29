//Arrays

// one object that can hold other types of data 

// literal notation
let numbers = [ 24,12,13,56,12]

// get an object out with an index
// returns 24
numbers[0] 


// change a value 
numbers[0]= 12

console.log(numbers) //12,12,14,56,12


//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [ 24,12,13,56,12]
// reduce runs once for each element in the array and keeps an accumulation - then pulls off a current value (div, multiply, sum, ect...)
let sum = nums.reduce ((acc,c) => acc + c, 0) 


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

// use .map when making a new array 

let sq = nums.map( n => n*n)

console.log(sq)



//Create a function that takes string
//Print the reverse of that string to the console

// reverse() does not work with strings 
// you need to use split to create a string into an array , then reverse, then join to return it to a string 

// split() & join() can take in values
// where you put a space the delimiter will change determine where to split the space

function rstrings(str){
    let rstings = str.split(' ').reverse().join(' ')
    console.log(rstings);
}

rstrings('potter is a goblin');

//Create a function that takes in a string
//Alert if the string is a palindrome or not

let isPalindrome = s => s === s.split('').reverse().join('') ? alert ('yes') : alert('no');

function isPalindrome(str){
    let revStr = str.split('').reverse().join('');
    if (str.toLowerCase() === revStr.toLowerCase()){
        alert('yes')
    } else {
        alert('no')
    }
}



// sort method 
// this expects some way to sort content
// (a,b)are parameters a-b shows how to sort 
Array.sort((a,b) => a-b)