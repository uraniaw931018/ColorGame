var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode
	setupModeButtons();
	// square
	setupModeSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0;i < modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			for(var i = 3;i < squares.length;i++){
				squares[i].style.display = "none";
			}
		}else{
			for(var i = 3;i < squares.length;i++){
				squares[i].style.display = "inline";
			}
		}
		reset();
		});
	}
}
function setupModeSquares(){
	for(var i = 0;i < squares.length;i++){
		squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = pickedColor;
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		})
	}
}
function reset(){
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	
	if(squares[3].style.display === "none"){
		colors = generateRandomColors(3);
	}else{
		colors = generateRandomColors(6);
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click",function(){
	reset();
});


function changeColors(color){
	for(var i = 0;i < squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to array
	for(var i = 0;i < num;i ++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	// return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", "+g+", "+b+")";
}