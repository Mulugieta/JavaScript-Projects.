//   global variable: accessible from any function
let globalVar = "I'm a global variable!";

// Function using global variable
function showGlobal() {
    console.log(globalVar);  // should print the global variable to the console
}
showGlobal();

// local variable is only accessible inside the function
function showLocal() {
    let localVar = "I'm a local variable!";
    console.log(localVar);  // should print the local variable to the console
}
showLocal();

// this would throw an error because localVar is not accessible outside its function
// console.log(localVar);  // uncommenting this line would cause an error

// function with intentional error to show debugging
function brokenFunction() {
    let number = 10;
    // i am putting intentional typo below: 'nmber' is not defined (should be 'number')
    console.log(nmber);  //  triggering an error
}
brokenFunction();  // open Chrome DevTools to debug this error

//function with if/else if/else logic based on time
function displayGreeting() {
    let currentHour = new Date().getHours();  // getting the current hour (0-23)
    let message;

    if (currentHour < 12) {
        message = "Good morning!";
    } else if (currentHour < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }

    // display greeting in paragraph with id="greeting"
    document.getElementById("greeting").innerHTML = message;
}

  // custom if statement to demonstrate condition
let temperature = 75;

if (temperature > 70) {
    console.log("It's warm outside, maybe wear short sleeves!");
}

//function to check voting eligibility using if/else
function checkVotingEligibility() {
    let age = document.getElementById("ageInput").value;  // getting user input
    let message;

    if (age >= 18) {
        message = "You are eligible to vote!";
    } else {
        message = "Sorry, you must be at least 18 to vote.";
    }

    //output result to the paragraph with id="votingResult"
    document.getElementById("votingResult").innerHTML = message;
}

//time_function() checks the curent hour and returns a message
function Time_function() {
    var Time = new Date().getHours();  //getting the hour
    var Reply;

    //compare time ranges using proper logic
    if (Time > 0 && Time < 12) {
        Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }

    // display result in paragraph with id="Time_of_day"
    document.getElementById("Time_of_day").innerHTML = Reply;
}
