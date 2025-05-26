function showSpeed(element) {
    var speed = element.getAttribute("data-speed");
    var vehicleName = element.textContent;
    document.getElementById("output").textContent = vehicleName + " has a top speed of " + speed + ".";
}
