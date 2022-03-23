// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

// let myHoliday = Portugal
// let myHoliday = myHoliday.toUpperCase()
// console.log(myHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

// let text= "whatsup"
// alert (text.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

// function jax(a,b,c,d,e){
//     let diff = 100 - (a+b+c+d+e);
//     alert (Math.abs(diff))
// }

// jax(1,3,6,9,10)


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

// function jam (a,b,c){
//     let minimum = Math.min(a,b,c)
//     let mx = Math.max(a,b,c)
//     console.log(`this is the min ${minimum} and the maximum is ${mx}`)
// }

// jam(10,20,50)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// this is the arrow function for this 
// a function = passing in something, to a function, to a Math call, to a Binaray -- this is an implicit return 
const ht = _ => Math.random() <.5 ? "heads" : "tails"


// standard function 
// function ht (){
//     let flip = Math.random()
//     if(flip < .5){
//         return'heads'
//     }else{
//         return 'tails'
//     }
// }


// // you have to console log it or it will not show anywhere because its a return 
// console.log(ht);

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function num(n){
    for(let i = 1; i <= n; i++){
        let reslut = ht()
        console.log(reslut)
    }
}
num (15)