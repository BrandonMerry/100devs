

// this grabs the thing with ID of check (the btn)
// event listner runs a function after click
document.querySelector('#check').addEventListener('click', check)

function check() {

  // find the thing with an id of day (form input)
  // get the value that is put inside the input
  // assign it to day 
  // .toLowerCase() makes everything lowecased 
  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if(day === "tuesday" || day === "thursday" ){
    alert('CLASS DAY!')
  }else if(day === "saturday" || day === "sunday"){
    alert('Weekend!')
  }else{
    alert('BORRRRRRINNNNNGGGGG!!!')
  }

}
