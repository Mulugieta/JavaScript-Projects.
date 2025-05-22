//thuis function adds values using + operator
function addNumbers() {
    document.getElementById("Addition").innerHTML = 5 + 3;
}

//this function subtract values using - operator
function subtractNumbers() {
    document.getElementById("Subtraction").innerHTML = 10 - 4;
}

//this function multiplies values using * operator
function multiplyNumbers() {
    document.getElementById("Multiplication").innerHTML = 6 * 7;
}

//this function divides values using / operator
function divideNumbers() {
    document.getElementById("Division").innerHTML = 20 / 5;
}

//this function perform multiple operations on values
function multipleOperations() {
    let result = 5 + 6 * 2 / 3 - 1; 
    document.getElementById("MultipleOps").innerHTML = result;
}

function modulusOperation() {
    let result = 10 % 3; // 10 divided by 3 gives remainder 1
    document.getElementById("Modulus").innerHTML = result;
}

// this function provide the negation of a value
function negationOperation() {
    let number = 9;
    let result = -number;
    document.getElementById("Negation").innerHTML = result;
}
function randomNumber() {
    let result = Math.random() * 100; // random number between 0 and 100
    document.getElementById("Random").innerHTML = result.toFixed(2); // and limit to 2 decimal places

}
function useMathMethod() {
    let result = Math.sqrt(64); // square root of 64 = 8
    document.getElementById("MathMethod").innerHTML = "The square root of 64 is " + result;

}
// this function increment the value of 5 by 1 using ++ operator
function incrementNumber() {
    let x = 5;
    x++;
    document.getElementById("Increment").innerHTML = "Incremented value: " + x;
}

// this function decrement the value of 5 by 1 using -- operator
function decrementNumber() {
    let y = 5;
    y--;
    document.getElementById("Decrement").innerHTML = "Decremented value: " + y;
}
