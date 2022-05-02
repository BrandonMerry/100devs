// Replace Function Expressions with arrow functions in the code below:


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );


//   my code 

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask (
    "Are you in agreement with this statement?",
    () => alert("I agree."),
    () => alert ("I do NOT agree")
  );