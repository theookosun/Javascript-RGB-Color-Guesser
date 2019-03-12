var colors = generateRandomColors(6);
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

function generateRandomColors(x){
    var arr = [];
    for (var i = 0; i < x ; i++){
        //get random color and push into array 
    arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g =  Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b +")";
}