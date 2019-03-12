
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolors();
var colorDisplay = document.getElementById("colorPicked");
var message = document.getElementById("message");
var heading = document.getElementById("heading");
var reseButt = document.getElementById("reset");
var easybtn =document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");
colorDisplay.textContent = pickedColor;

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolors();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }    
    heading.style.backgroundColor = "#steelblue";
});

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor =  pickcolors();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    heading.style.backgroundColor = "steelblue";
    
});

reseButt.addEventListener("click", function(){
    //generate new colors
    message.textContent = "";
    reseButt.textContent = "New Colors"
    colors = generateRandomColors(numSquares);
    pickedColor =  pickcolors();
    //change colors of squares
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    heading.style.backgroundColor = "steel blue";


});

for (var i = 0; i < squares.length; i++){
    //adding Initial Colors to Squares
    squares[i].style.backgroundColor = colors[i];

    //add Click listeners to squares 
    squares[i].addEventListener("click", function(){
        //grab color of clicked square 
        if(this.style.backgroundColor === pickedColor) {
            message.textContent = "Correct"
            reseButt.textContent = "PLAY AGAIN?"
            heading.style.backgroundColor = "steelblue";
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

