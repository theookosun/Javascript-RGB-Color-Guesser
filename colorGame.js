var colors =[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors [3];
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
        } 
        else{
            this.style.background = "#232323";
            message.textContent = "Try Again"
           
        }
    })
}


