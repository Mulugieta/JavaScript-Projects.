// ----------------------
// Countdown Timer
// ----------------------

function countdown() {
    // get the number of seconds from the input field and convert it to an integer
    let seconds = parseInt(document.getElementById("seconds").value);

    // define a function that updates the timer each second
    function updateTimer() {
        //decrease the seconds by one
        seconds--;

        //update the HTML content of the timer paragraph with the new time
        document.getElementById("timer").textContent = seconds;

        //if the countdown reaches below 0, stop the timer and show an alert
        if (seconds < 0) {
            clearTimeout(timer); //stop the setTimeout loop
            alert("Time's up!"); // notify the user
            document.getElementById("timer").textContent = ""; // clear the display
        } else {
            //continue counting down after 1 second
            timer = setTimeout(updateTimer, 1000);
        }
    }

    // starting the countdown
    let timer = setTimeout(updateTimer, 1000);
}


// ----------------------
// Image Slideshow
// ----------------------

// keep track of which slide is currently showing
let currentIndex = 1;

//show the initial slide when the page loads
displaySlide(currentIndex);

// this function is called when the left/right arrows are clicked
function changeSlide(n) {
    displaySlide(currentIndex += n);
}

// this function is called when a specific dot is clicked
function goToSlide(n) {
    displaySlide(currentIndex = n);
}

// core function to show a specific slide based on the index
function displaySlide(n) {
    let slides = document.getElementsByClassName("slide"); // all slides
    let dots = document.getElementsByClassName("dot");     // all navigation dots

    //if we go past the last slide, loop back to the first
    if (n > slides.length) currentIndex = 1;

    // if we go before the first slide, loop to the last
    if (n < 1) currentIndex = slides.length;

    //hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // remove the "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // display the current slide
    slides[currentIndex - 1].style.display = "block";

    //highlight the current dot
    dots[currentIndex - 1].classList.add("active");
}
