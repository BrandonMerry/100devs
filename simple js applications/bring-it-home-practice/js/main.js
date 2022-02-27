// *Variables*
// Create a variable and console log the value
// let name = 'brandon';
// console.log(name);
// Create a variable, add 10 to it, and alert the value
// let y = 12
// y += 10

// alert(y);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

// function sub(a,b,c,d){
//     const diff = a -b-c-d
//     alert(diff)
// }
// sub(100,10,9,71)
// Create a function that divides one number by another and returns the remainder

// function remainder (x,y){
//     return x/y
// }
// console.log(remainedr(3/1))
// *Conditionals*

// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

// function robin( x, y) {
// const jumanji = 'robin williams jumanii king'
//     if (x + y > 50) {
//       alert (jumanji)
//     }
 
//   }

//   console.log(robin(50,1))

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

// function cantSpell(x,y,z){
//     const zoo = 'zebra'
//     if(x*y*z % 3 === 0) {
//         alert(zoo)
//     }
//     else{
//         alert('incorrect')
//     }

// }

// console.log(cantSpell(2,2,2))


// fizzbuzz 

for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}