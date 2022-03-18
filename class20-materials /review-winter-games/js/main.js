//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function even(arr){
    // make this open so it can be manipulated later 
 let evens =[]

 arr.forEach(element => {
     if(element % 2 === 0){
        //  this pushes the even into the evens open array 
         evens.push(element)
     }
 });

//  return this to show the correct numbers 
 return evens
}

console.log(even([1,2,3,4,5,6,7,8]))