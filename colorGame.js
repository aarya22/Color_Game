var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add quick listners to squares
    squares[i].addEventListener("click", function(){
        //get color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            changeColors(clickedColor);
            messageDisplay.textContent = "Correct";
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#223322";
            messageDisplay.textContent = "Try again";
        }
    })
}


function changeColors(color) {
    //loop through all squares
    //change each to match the given color
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(colors) {
     var idx = Math.floor(Math.random() * colors.length);
     return colors[idx];
}

function randomColor() {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    return "rgb(" + a + ", " + b + ", " + c + ")";
}

function generateRandomColors(size) {
    var arr = []

    for (var i = 0; i < size; i++) {
        //get random color and push into arr
        var c = randomColor()
        while (!arr.includes(c)) {
            arr.push(c)
        }
    }

    return arr;
}