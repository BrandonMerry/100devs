//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let shows = ['mash','nick at night', 'rick and morty']

shows.forEach( kind => console.log(kind));

//Create an array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let nix = [1,2,3,4,5,6]
// use the filter for each element in the array 
let not = array => array.filter(number => number %2 === 0);

console.log(not(nix))



//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecond(array){
    // this sorts from low to hight (a-b) -- you can go from high to low (b-a) if need be
    let sor = array.sort((a,b) => a-b)
    alert (sor[1] + sor[sor.length - 2])
}

sumSecond([32,5,22,1,2,3,9])
