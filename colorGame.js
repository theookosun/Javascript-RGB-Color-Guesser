var colors =[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolors();
var colorDisplay = document.getElementById("colorPicked");
var message = document.getElementById("message");
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //adding Initial Colors to Squares
    squares[i].style.backgroundColor = colors[i];

    //add Click listeners to squares 
    squares[i].addEventListener("click", function(){
        //grab color of clicked square 
        if(this.style.backgroundColor === pickedColor) {
            message.textContent = "Correct"
            ChangeColors(pickedColor);
        } 
        else{
            this.style.background = "#232323";
            message.textContent = "Try Again"
           
        }
    })
}

function ChangeColors(color){
    //loop through all Squares
    //Change colors to given colors
    for (var i = 0; i < squares.length; i++){
        //adding Initial Colors to Squares
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.backgroundColor = color;
    }
}

function pickcolors(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}