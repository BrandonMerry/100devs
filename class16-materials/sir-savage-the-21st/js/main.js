//Create a function that has a loop that prints '21' 21 times to the console and then call that function

// create a function 
// function loop21(){

//     // loop inside your function
// for (let i = 1; i <=21; i++){
//     console.log('21')
// }
// }

// // call the function
// loop21()

//Bonus can you make it print '21' 21 times to the dom?
// create a function 
function loop21(){

    // loop inside your function
for (let i = 1; i <=21; i++){
    // += to see all of the inputs 
    document.querySelector('#savageSays').innerText += " 21"
}
}

// call the function
loop21()