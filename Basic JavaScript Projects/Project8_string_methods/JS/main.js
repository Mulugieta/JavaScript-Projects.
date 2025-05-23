//this function puts strings together to make one sentence
function displayConcatenatedString() {
    var part1 = "Hello, ";
    var part2 = "this is ";
    var part3 = "a concatenated ";
    var part4 = "string using concat().";

    // join all parts with concat()
    var fullSentence = part1.concat(part2, part3, part4);

    // put the sentence on the page in the element with id concatString
    document.getElementById("concatString").innerHTML = fullSentence;
}

// this function takes a part of a string (like cutting a piece out)
function displaySlicedString() {
    var sentence = "JavaScript string methods are powerful!";

    // slice from letter 11 to 16 to get "string"
    var section = sentence.slice(11, 17);

    // show the sliced part on the page
    document.getElementById("slicedString").innerHTML = section;
}

// this function makes a string all capital letters
function displayUpperCaseString() {
    var original = "make this uppercase";

    // turn the string into uppercase letters
    var upper = original.toUpperCase();

    // show the uppercase string on the page
    document.getElementById("upperCaseString").innerHTML = upper;
}

//this function finds the place of a word inside a sentence
function displaySearchPosition() {
    var text = "Search this string for the word 'this'";

    // find where the word "this" starts, it should be 7
    var position = text.search("this");

    // show the number on the page
    document.getElementById("searchResult").innerHTML = position;
}

//this function changes a number into a string
function displayNumberAsString() {
    var number = 2025;

    // change number to string
    var numberAsString = number.toString();

    //show the string number on the page
    document.getElementById("numberAsString").innerHTML = numberAsString;
}

//this function makes a number shorter with only some digits
function displayPrecisionNumber() {
    var number = 123.456789;

    // keep only 5 digits in the number (like rounding)
    var preciseNumber = number.toPrecision(5);

    // show the shorter number on the page
    document.getElementById("precisionNumber").innerHTML = preciseNumber;
}

//this function keeps 2 numbers after the decimal point
function displayFixedNumber() {
    var number = 9.87654321;

    //round number to 2 decimals
    var fixedNumber = number.toFixed(2);

    // show the rounded number
    document.getElementById("fixedNumber").innerHTML = fixedNumber;
}

//this function gets the normal number value from a number object
function displayValueOfNumber() {
    var numObj = new Number(42);

    // get the actual number from the object
    var value = numObj.valueOf();

    // show the value on the page
    document.getElementById("valueOfNumber").innerHTML = value;
}

// call all the functions so the page shows everything when it loads
displayConcatenatedString();
displaySlicedString();
displayUpperCaseString();
displaySearchPosition();
displayNumberAsString();
displayPrecisionNumber();
displayFixedNumber();
displayValueOfNumber();
