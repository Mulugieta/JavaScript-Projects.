
function showSum() {
    var num1 = 7;
    var num2 = 8;
    var result = "The new sum is: " + (num1 + num2);

    var outputElement = document.getElementById("sumOutput");
    outputElement.innerHTML = result;
    outputElement.style.color = "blue"; // change text color
}


function concatenateText() {
    var message = "Learning JavaScript ";
    message += "is really fun!";

    document.getElementById("concatOutput").innerHTML = message;
}
