// function to do a while loop
function Call_Loop() {
  let text = ""; // text to put in loop
  let i = 1; // start at 1
  while (i <= 5) { // keep going while i less or equal 5
    text += "This is loop iteration " + i + "<br>"; // add text for each loop
    i++; // add one to i
  }
  document.getElementById("Loop").innerHTML = text; // put text in html element with id Loop
}

// for loop function to list instruments
function for_Loop() {
  const instruments = ["Guitar", "Drums", "Piano", "Violin", "Flute"]; // array of instruments
  let content = ""; // empty string for content
  for (let i = 0; i < instruments.length; i++) { // loop over array
    content += instruments[i] + "<br>"; // add each instrument and new line
  }
  document.getElementById("List of Instruments").innerHTML = content; // show content in html
}

// function to show an array item
function array_Function() {
  const activities = ["running", "swimming", "cycling", "hiking"]; // activities array
  // show one activity by index 2
  document.getElementById("Array").innerHTML =
    "My favorite activity is " + activities[2] + ".";
}

// function that uses const object
function constant_function() {
  const car = { // define car object
    make: "Toyota",
    model: "Camry",
    year: 2010
  };

  car.year = 2020; // change the year property
  car.color = "blue"; // add new property color

  // show car info in html element
  document.getElementById("Constant").innerHTML =
    "My " + car.make + " " + car.model + " is now from " + car.year +
    " and it's " + car.color + ".";
}

// example to show let keyword usage
function let_Keyword_Example() {
  let message = "This message is scoped with 'let'."; // define variable with let
  alert(message); // popup alert message
}

// function with return to add numbers
function addNumbers(a, b) {
  return a + b; // return the sum of a and b
}

// function to show result of addNumbers
function show_Return_Result() {
  let result = addNumbers(7, 5); // call addNumbers with 7 and 5
  document.getElementById("Return").innerHTML =
    "The result of 7 + 5 is: " + result; // show result in html
}

// object using let keyword with method
function display_Object() {
  let student = { // create student object
    firstName: "Sara",
    lastName: "Lee",
    age: 22,
    major: "Computer Science",
    fullDescription: function () { // method to return full description string
      return this.firstName + " " + this.lastName +
             " is " + this.age + " years old and studies " + this.major + ".";
    }
  };

  document.getElementById("Object").innerHTML = student.fullDescription(); // show description
}

// break example function
function break_Example() {
  let text = ""; // string to hold text
  for (let i = 1; i <= 10; i++) { // loop from 1 to 10
    if (i === 5) { // if i equals 5
      break; // stop the loop right here
    }
    text += "Number: " + i + "<br>"; // add the number and line break
  }
  document.getElementById("Break").innerHTML = text; // show text in html
}

// continue example function
function continue_Example() {
  let text = ""; // string for text
  for (let i = 1; i <= 10; i++) { // loop 1 to 10
    if (i === 5) { // if i is 5
      continue; // skip the rest and go next loop
    }
    text += "Number: " + i + "<br>"; // add number and line break
  }
  document.getElementById("Continue").innerHTML = text; // show in html
}
