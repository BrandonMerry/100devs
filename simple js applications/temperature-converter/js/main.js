//Write your pseduo code first! 




// create an event listener 
document.querySelector('#convert').addEventListener('click', convert)



function convert() {

    // get the value from the input (use let bc value changes)
    let temp = document.querySelector('#temp').value
  
    // create a function to convert the temp
    temp =  temp * 9/5 + 32


    // show the value to 
    document.querySelector('#placeToPutResult').innerText =  temp
  }