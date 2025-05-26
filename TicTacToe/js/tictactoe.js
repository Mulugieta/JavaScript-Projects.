//tictactoe.js

//Variable to keep track of whose turn it is.
let activePlayer = 'X';

//Array to store moves - use this to determine win conditions.
let selectedSquares = [];

//Function to place x or o in a square.
function placeXOrO(squareNumber) {
    //Checks if the square has been selected already.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //Variable to hold the HTML element that was clicked.
        let select = document.getElementById(squareNumber);
        //Determines the active player and places the icon.
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.gif")'; // Updated to .gif
        } else {
            select.style.backgroundImage = 'url("images/o.gif")'; // Updated to .gif
        }
        //Adds the square number and player to the array.
        selectedSquares.push(squareNumber + activePlayer);
        //Calls the function to check for a win.
        checkWinConditions();
        //Changes the active player.
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //Function to play the placement sound.
        audio('./media/place.mp3');
        //Checks if it is the computer's turn.
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function() {
                computersTurn();
            }, 1000);
        }
        //Returning true is needed for the computersTurn() function.
        return true;
    }
}

//Picks a random square for the computer's turn.
function computersTurn() {
    let success = false;
    let pickSquare;
    while (!success) {
        pickSquare = String(Math.floor(Math.random() * 9));
        if (placeXOrO(pickSquare)) {
            success = true;
        }
    }
}

//This function parses the selectedSquares array to determine if a player has won.
//The drawLine function is called if a win condition is met.
function checkWinConditions() {
    // X Win Conditions
    if (arrayIncludes('0X', '1X', '2X')) {
        drawLine(50, 100, 558, 100);
    } else if (arrayIncludes('3X', '4X', '5X')) {
        drawLine(50, 304, 558, 304);
    } else if (arrayIncludes('6X', '7X', '8X')) {
        drawLine(50, 508, 558, 508);
    } else if (arrayIncludes('0X', '3X', '6X')) {
        drawLine(100, 50, 100, 558);
    } else if (arrayIncludes('1X', '4X', '7X')) {
        drawLine(304, 50, 304, 558);
    } else if (arrayIncludes('2X', '5X', '8X')) {
        drawLine(508, 50, 508, 558);
    } else if (arrayIncludes('6X', '4X', '2X')) {
        drawLine(100, 508, 510, 90);
    } else if (arrayIncludes('0X', '4X', '8X')) {
        drawLine(100, 100, 520, 520);
    }
    // O Win Conditions
    else if (arrayIncludes('0O', '1O', '2O')) {
        drawLine(50, 100, 558, 100);
    } else if (arrayIncludes('3O', '4O', '5O')) {
        drawLine(50, 304, 558, 304);
    } else if (arrayIncludes('6O', '7O', '8O')) {
        drawLine(50, 508, 558, 508);
    } else if (arrayIncludes('0O', '3O', '6O')) {
        drawLine(100, 50, 100, 558);
    } else if (arrayIncludes('1O', '4O', '7O')) {
        drawLine(304, 50, 304, 558);
    } else if (arrayIncludes('2O', '5O', '8O')) {
        drawLine(508, 50, 508, 558);
    } else if (arrayIncludes('6O', '4O', '2O')) {
        drawLine(100, 508, 510, 90);
    } else if (arrayIncludes('0O', '4O', '8O')) {
        drawLine(100, 100, 520, 520);
    }
    //Checks for a tie - if no win conditions are met and 9 squares have been selected.
    else if (selectedSquares.length >= 9) {
        //Plays the tie sound.
        audio('./media/tie.mp3');
        //Resets the game after a tie.
        setTimeout(function() {
            resetGame();
        }, 500);
    }
}

//This function checks if an array includes 3 strings. It is used to check for
//each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && c === true) {
        return true;
    }
}

//Clears the board and the array to restart the game.
function resetGame() {
    //This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        //This gets the HTML element of i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
    //This resets our activePlayer back to X for the start of a new game.
    activePlayer = 'X'; // Ensure active player is reset for a new game
}

//Plays the audio files.
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//Function to draw the line across winning coordinates.
function drawLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2;
    let x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {
                x += 10;
            }
            if (y < y2) {
                y += 10;
            }
            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }
        } else if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {
                x += 10;
            }
            if (y > y2) {
                y -= 10;
            }
            if (x >= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
    }
    //Clears the board after the animation.
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function() {
        clear();
        resetGame();
    }, 1000);
}

//Disables click during the computer's turn and win animation.
function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(function() {
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}