var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorPicked");
var message = document.getElementById("message");
var heading = document.getElementById("heading");
var reseButt = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
   setUpModeButtons();
   setUpsquares();
   reset();

   function setUpsquares(){
           for (var i = 0; i < squares.length; i++){
    
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

   }
function setUpModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolors();
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    reseButt.textContent = "New Colors"
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];      
          }
        else{
            squares[i].style.display = "none";
        }
    }

    heading.style.backgroundColor = "steel blue";
}

reseButt.addEventListener("click", function(){
   reset();

});



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

}