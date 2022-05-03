// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

const day = prompt('Enter a day of the week');

if(day === 'monday'){
    alert ('tuesday');
} else if (day === 'tuesday'){
    alert ('wednesday');
} else if (day === 'wednesday'){
    alert ('thursday');
} else if (day === 'thursday'){
    alert ('firday');
} else if (day === 'friday'){
    alert ('saturday');
} else if (day === 'saturday'){
    alert ('sunday');
} else if (day === 'sunday'){
    alert ('monday');
}else{
    alert("please check your spelling or enter a valid name for a day of the week")
};

// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let nmb1 = Number(prompt('enter a number'));
let nmb2 = Number(prompt('enter a number'));

if(nmb1 > nmb2){
 console.log(`${nmb1} is greater than ${nmb2}`)
} else if(nmb2 > nmb1){
    console.log(`${nmb2} is greater than ${nmb1}`)
}else {
    console.log("your inputs are equal")
}

// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

const monthNum = Number(prompt('Enter a number of a month: (e.g 1 = January and 12 = December'))

if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    alert("There are 31 days in this month");
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    alert("30 days in this month");
  } else if (month === 2) {
    alert("This month has 28 days");
  } else {
    alert("Please enter a number corresponding to a month!");
  }

// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

let hours = Number(prompt("Enter the hours:"));
let minutes = Number(prompt("Enter the minutes:"));
let seconds = Number(prompt("Enter the seconds:"));

// We start by testing errors cases
if (
  hours >= 0 &&
  hours <= 23 &&
  minutes >= 0 &&
  minutes <= 59 &&
  seconds >= 0 &&
  seconds <= 59
) {
  seconds++; // Incrementing the seconds
  if (seconds === 60) {
    // Next minute: seconds are reset to 0
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      // Next hour: minutes are reset to 0
      minutes = 0;
      hours++;
      if (hours === 24) {
        // Next second is midnight
        hours = 0;
      }
    }
  }
  console.log(
    `In a second, time will be ${hours} hours, ${minutes} minutes et ${seconds} seconds`
  );
} else {
  console.log("Incorrect hour!");
}
