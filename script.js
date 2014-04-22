console.log("loaded");
var computerChoice = 0;
var your_choice= 0;
function choiceConversion(your_choice){
	switch(your_choice){
	case "scissors":
		return "scissor";
		break;
	case "rocks":
		return "rock";
		break;
	case "papers":
		return "paper";
		break;
	default:
		return your_choice;
	};
}
document.getElementById("userChoice").onkeydown = enterGame;
function enterGame(){
	if(event.keyCode==13){
		startGame();
	};
}
function reloadPage(){
	location.reload();
}
function hideStuff(){
	document.getElementById("guess_box").style.visibility= "hidden";
	document.getElementById("resultDisplay").style.visibility= "hidden";
	document.getElementById("computerDisplay").style.visibility= "hidden";
	// document.getElementById("score_tally").style.visibility= "hidden";
	document.getElementById("userChoice").style.visibility = "hidden";

}
document.getElementById("exiter").onclick = exitGame;
function exitGame(){
	document.getElementById("question_text").innerHTML= "Fine. Go Away.";
	document.getElementById("question_text").style.fontSize="40px";
	hideStuff();
}
var startCounter = 0;
document.getElementById("submitter").onclick = startGame;
function startGame(){
	startCounter = startCounter+1;
	if(startCounter==1){
	document.getElementById("score_tally").style.visibility = "visible";
	your_choice = document.getElementById("userChoice").value;
	your_choice = choiceConversion(your_choice);
	console.log(your_choice);
	computerGuess();
	guessAnalysis();
	// apples();
	// peaches();
	playAgain();
	}
	else if(startCounter==2){
		your_choice = document.getElementById("userChoice").value;
		your_choice = choiceConversion(your_choice);
		document.getElementById("computerDisplay").innerHTML= "";
		document.getElementById("resultDisplay").innerHTML= "";
		// if((your_choice=="okay")||(your_choice=="yes")){
			document.getElementById("question_text").innerHTML= "GREAT! What do you pick this time?";
			document.getElementById("submitter").innerHTML= "Guess";
			document.getElementById("userChoice").style.visibility = "visible";
			document.getElementById("exiter").style.display = "none";
		// }
		// else{document.getElementById("question_text").innerHTML= "Fine, go away.";}
	}
	else if(startCounter==3){
		your_choice = document.getElementById("userChoice").value;
		your_choice = choiceConversion(your_choice);
		document.getElementById("question_text").innerHTML= "Once more!";
		console.log(your_choice);
		computerGuess();
		guessAnalysis();
	}
	else if(startCounter==4){
	your_choice = document.getElementById("userChoice").value;
	your_choice = choiceConversion(your_choice);
	console.log(your_choice);
	computerGuess();
	guessAnalysis();
		if(computerWinCount> userWinCount){
		document.getElementById("question_text").innerHTML= "I WIN EVERYTHING!!!";
		document.getElementById("question_text").style.fontSize="40px";
		hideStuff();
		document.getElementById("submitter").innerHTML= "Start Over?";
		document.getElementById("submitter").style.visibility= "visible";
		document.getElementById("submitter").onclick = reloadPage;
		gradualJump();
		}
		else if (userWinCount > computerWinCount){
		document.getElementById("question_text").innerHTML= "YOU WIN EVERYTHING!!!";
		document.getElementById("question_text").style.fontSize="40px";
		hideStuff();
		document.getElementById("submitter").innerHTML= "Start Over?";
		document.getElementById("submitter").style.visibility= "visible";
		document.getElementById("submitter").onclick = reloadPage;
		gradualJump();
		}
		else {
		document.getElementById("question_text").innerHTML= "I guess we're created equal";
		document.getElementById("question_text").style.fontSize="40px";
		hideStuff();
		document.getElementById("submitter").innerHTML= "Start Over?";
		document.getElementById("submitter").style.visibility= "visible";
		document.getElementById("submitter").onclick = reloadPage;
		gradualJump();
		}
	}


}
function computerGuess(){
	var choice_Array = ["rock", "paper", "scissor"];
	var randomNumber = Math.round(Math.random()*2);
	computerChoice = choice_Array[randomNumber];
	console.log(computerChoice);
	document.getElementById("computerDisplay").innerHTML= computerChoice
}
function showingResult(feedback, userscore, computerscore){
	document.getElementById("resultDisplay").innerHTML = feedback;
	document.getElementById("scoreOfComputer").innerHTML = userscore;
	document.getElementById("scoreOfUser").innerHTML = computerscore;
}
var userwin = "You win this round!"
var userWinCount = 0;
var tie = "Tie this time!"
var computerwin = "I win this round!!"
var computerWinCount = 0;
var errormessage = "I don't understand -_-"
function guessAnalysis(){
	if(computerChoice==your_choice){
		console.log("tie");
		showingResult(tie, userWinCount, computerWinCount);
	}
	else if ((computerChoice=="rock")&&(your_choice=="scissor")){
		console.log("computer won");
		computerWinCount = computerWinCount+1;		
	}
	else if ((computerChoice=="rock")&&(your_choice=="paper")){
		console.log("user won");
		userWinCount= userWinCount+1;
		showingResult(userwin, userWinCount, computerWinCount);
	}
	else if((computerChoice=="scissor")&&(your_choice=="paper")){
		console.log("computer won");
		computerWinCount= computerWinCount+1;
		showingResult(computerwin, userWinCount, computerWinCount);
	}
	else if ((computerChoice=="scissor")&&(your_choice=="rock")){
		console.log("user won");
		userWinCount = userWinCount+1;
		showingResult(userwin, userWinCount, computerWinCount);
	}
	else if((computerChoice=="paper")&&(your_choice=="scissor")){
		console.log("user won");
		userWinCount = userWinCount+1;
		showingResult(userwin, userWinCount, computerWinCount);
	}
	else if((computerChoice=="paper")&&(your_choice=="rock")){
		console.log("computer won");
		computerWinCount = computerWinCount+1;
		showingResult(computerwin, userWinCount, computerWinCount);
	}
	else {console.log("something went wrong")
		showingResult(errormessage);
		};
}
function playAgain(){
	document.getElementById("question_text").innerHTML= "Best out of three?";
	document.getElementById("submitter").innerHTML= "Yes!";
	document.getElementById("userChoice").style.visibility = "hidden";
	document.getElementById("exiter").style.display = "block";
	
}
var penguin = document.getElementById("happyPenguin");
var jumpcount = 0;
var topPosition = 200;
var thisInt = 0;
function jumpipoo(){
			topPosition = topPosition+1;
			penguin.style.top = topPosition+"px";
			console.log(topPosition); 
			if(topPosition > 215){
				console.log("matched");
				clearInterval(downInt);
			}
		}
function jumpup(){
	topPosition = topPosition-1;
	penguin.style.top = topPosition+"px";
	console.log(topPosition); 
	if(topPosition < 200){
		console.log("matched");
		clearInterval(upInt);
	}
}


function gradualJump(){
		penguin.style.display = "block";
		jumpcount = jumpcount+1;
		if(jumpcount ==1){
			downInt = setInterval(jumpipoo, 50);
		}
		else if(jumpcount==2){
			upInt = setInterval(jumpup, 50);
			jumpcount = 0;
		}
		window.setTimeout(gradualJump,1000);
	};	

// function apples(){
// 	if (your_choice == "rock"){
// 		console.log("yay")
// 	}
// 	else{console.log("i'm not recognizing rock")}
// }
// function peaches(){
// 	if(computerChoice=="rock"){
// 		console.log("yup")
// 	}
// 	else{console.log("i'm not getting rock")}

// }