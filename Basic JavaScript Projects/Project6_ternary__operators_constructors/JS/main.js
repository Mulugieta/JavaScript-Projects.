//  ternary operator function to check height eligibility for a ride
function Ride_Function() {
    var Height = document.getElementById("Height").value;
    // Use a ternary operator to determine the message
    var Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//constructor function for a Vehicle object
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//create new Vehicle objects using the 'new' keyword
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// display info about Eriks vehicle using the constructor objct
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year + ".";
}

// constructor function for a Person object
function Person(FirstName, LastName, Age) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Age = Age;
}

// function that uses the 'new' keyword to create a Person and display info
function newFunction() {
    var person1 = new Person("Jane", "Doe", 30);
    document.getElementById("New_and_This").innerHTML =
        person1.FirstName + " " + person1.LastName + " is " + person1.Age + " years old.";
}

//function with a nested function inside
function nestedFunction() {
    // outer function returns the result of inner function logic
    document.getElementById("Nested_Function").innerHTML = count();

    function count() {
        let startingPoint = 0;
        //inner function modifies the outer varable
        function plusOne() {
            startingPoint += 1;
        }
        plusOne();
        return startingPoint;
    }
}
