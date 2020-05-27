//**** Variablen ****
//Array für Farben als String
var colors = [];

//Auswählen der gesuchten Farbe
var pickedColor;

//Variable zum Tracken der Anzahl der Rechtecke 
var numSquares = 6;

//**** Selectors ****
//Nachricht anzeigen 
var messageDisplay = document.getElementById("message");

//Auswählen der Rechtecke 
var squares = document.querySelectorAll(".square");

//Auswählen des ResetButtons
var resetButton = document.getElementById("reset");

//Auswählen des H1
var h1 = document.querySelector("h1");

//Auswählen Easy und HardButton 
var modeButtons = document.querySelectorAll(".mode");

//************************
init();

function init() {

    //Mode Buttons Event Listeners
    setupModeButtons();
    //ClickListener auf Squares und Vergleichen mit PickedColor
    setupSquares();

    reset();
}

function setupModeButtons() {

    //Easy und Hard Buttons Event Listener 
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {

            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            //Das hier 
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6
                //Gleiche wie if else statement nur kürzer

            //Wie viele Quadrate anzeigen 
            //Neue Farben auswählen 
            //Neue zufällige Farbe auswählen (pickedColor) 
            //update page to reflect changes
            reset();
        });
    }
}

function setupSquares() {
    //Schleife zum Durchlaufen der Rechtecke
    for (var i = 0; i < squares.length; i++) {

        //ClickListener
        squares[i].addEventListener("click", function() {

            //Farbe des geklickten Rechtecks
            var clickedColor = this.style.backgroundColor;

            //Vergleichen mit pickedColor 
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    //Neue Farben generieren anhand der Anz der Quadrate
    colors = generateRandomColors(numSquares);

    //Neue zufällige Farbe auswählen
    pickedColor = pickColor();

    //neue zufällige Farbe anzeigen
    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";

    //Farbe der rechtecke ändern
    for (var i = 0; i < squares.length; i++) {

        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
}

//Reset Button Funktionalität
resetButton.addEventListener("click", function() {
    reset();
});

// //Anzeigen der gesuchten Farbe
// var colorDisplay = document.getElementById("colorDisplay");
// colorDisplay.textContent = pickedColor;

//Funktion zum Ändern der Farbe der Rechtecke 
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//Funktion zum zufälligen Auswählen der Farbe 
//Returs zufälligen Wert im Colors Array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {

    var arr = [];

    for (var i = 0; i < num; i++) {
        //Zufäll. Farbe ins Array pushen
        arr.push(randomColor());
    }
    return arr;
}

//Erzeugen von zufälligen Farben
function randomColor() {
    //Pick red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //Pick green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //Pick blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    //rgb(0, 0, 0)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}