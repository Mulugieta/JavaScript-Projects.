  //  define a variable and use typeof to display its data type using document.write()
let myVariable = 42;
document.write("Data type of myVariable: " + typeof myVariable + "<br><br>");

// also display in the browser using innerHTML
document.getElementById("typeOfOutput").innerHTML = "The type of myVariable is: " + typeof myVariable;

// ttype coercion example - combining string and number
let coercionExample = "The number is " + 10;
document.getElementById("coercionOutput").innerHTML = coercionExample;

//  showing infinity by using a very large number
let largeNumber = 2E310;  // Evaluates to Infinity
document.getElementById("infinityOutput").innerHTML = "Large number: " + largeNumber;

// Demonstrate -Infinity by using a very large negative number
let negativeLargeNumber = -3E310;  // Evaluates to -Infinity
document.getElementById("negInfinityOutput").innerHTML = "Negative large number: " + negativeLargeNumber;

// boolean comparison using greater than (>) and less than (<)
let isGreater = 10 > 5;  // true
let isLesser = 3 < 1;    // false
document.getElementById("booleanTrue").innerHTML = "Is 10 > 5? " + isGreater;
document.getElementById("booleanFalse").innerHTML = "Is 3 < 1? " + isLesser;

 // log a simple math operation in the browser console
console.log("5 + 7 = " + (5 + 7));

// the double equal (==) allows type coercion
let doubleEqualTrue = (10 == "10");   // true
let doubleEqualFalse = (10 == 15);    // false
document.getElementById("doubleEqualTrue").innerHTML = "Is 10 == '10'? " + doubleEqualTrue;
document.getElementById("doubleEqualFalse").innerHTML = "Is 10 == 15? " + doubleEqualFalse;

 // triple equal (===) checks value and type
let tripleTrue = (100 === 100);               // true: same type and value
let tripleFalse1 = ("100" === 200);           // false: different type and value
let tripleFalse2 = ("5" === 5);               // false: same value, different type
let tripleFalse3 = (10 === 20);               // false: same type, different value
document.getElementById("tripleEqualTrue").innerHTML = "Is 100 === 100? " + tripleTrue;
document.getElementById("tripleEqualFalse1").innerHTML = "Is '100' === 200? " + tripleFalse1;
document.getElementById("tripleEqualFalse2").innerHTML = "Is '5' === 5? " + tripleFalse2;
document.getElementById("tripleEqualFalse3").innerHTML = "Is 10 === 20? " + tripleFalse3;

// AND operator (&&) returns true only if both conditions are true
let andTrue = (5 > 2 && 10 > 3);   // true
let andFalse = (5 > 2 && 10 < 3);  // false
document.getElementById("andTrue").innerHTML = "Is 5 > 2 AND 10 > 3? " + andTrue;
document.getElementById("andFalse").innerHTML = "Is 5 > 2 AND 10 < 3? " + andFalse;

// OR operator (||) returns true if either condition is true
let orTrue = (5 < 2 || 10 > 3);    // true
let orFalse = (5 < 2 || 10 < 3);   // false
document.getElementById("orTrue").innerHTML = "Is 5 < 2 OR 10 > 3? " + orTrue;
document.getElementById("orFalse").innerHTML = "Is 5 < 2 OR 10 < 3? " + orFalse;

// NOT operator (!) reverses the boolean result
let notTrue = !(5 > 10);   // true: because 5 > 10 is false, and NOT false = true
let notFalse = !(10 > 5);  // false: because 10 > 5 is true, and NOT true = false
document.getElementById("notTrue").innerHTML = "NOT (5 > 10): " + notTrue;
document.getElementById("notFalse").innerHTML = "NOT (10 > 5): " + notFalse;
