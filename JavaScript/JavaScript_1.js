function Vehicle_Function() {
    var Vehicle_Output;
    var Vehicle = document.getElementById("Vehicle_Input").value;
    var Message = " is an awesome choice of transport!";
    switch (Vehicle) {
        case "Car":
            Vehicle_Output = "Car" + Message;
            break;
        case "Bike":
            Vehicle_Output = "Bike" + Message;
            break;
        case "Bus":
            Vehicle_Output = "Bus" + Message;
            break;
        case "Train":
            Vehicle_Output = "Train" + Message;
            break;
        case "Plane":
            Vehicle_Output = "Plane" + Message;
            break;
        case "Boat":
            Vehicle_Output = "Boat" + Message;
            break;
        default:
            Vehicle_Output = "Please enter a vehicle type exactly as listed above.";
    }
    document.getElementById("Output").innerHTML = Vehicle_Output;
}

function ChangeText() {
    var elements = document.getElementsByClassName("demo");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "The text has been changed!";
    }
}

window.onload = function drawCanvasGraphic() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        // Create a gradient background
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "purple");
        gradient.addColorStop(0.5, "blue");
        gradient.addColorStop(1, "cyan");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Optional: add text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Gradient Background", 50, 80);
    }
};
