// hello object
// Create an empty object user.
let user = {};
// Add the property name with the value John.
user.name = "john";
// Add the property surname with the value Smith.
user.surname="smith";
// Change the value of the name to Pete.
user.name = "Pete";
// Remove the property name from the object.
delete user.name;




// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }



// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let salaries ={
    john: 100,
    Ann: 160,
    Pete: 130
}

function sum(obj){
    for(let kiy in salaries){
        sum += salaries[key];
    }
}

alert(sum);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }