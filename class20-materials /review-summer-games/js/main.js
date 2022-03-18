//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
 function mut(arr){
     let pro = 1
     arr.forEach(num => pro *= num);
     alert(pro)
 }

 mut([2,3,3])