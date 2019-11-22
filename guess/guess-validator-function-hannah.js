/* guess validator function merit badge - hannah */

var answer=Math.floor(Math.random()*100)+1;
var guess=0;
var tries=0;
console.log(answer);
while(guess!=answer){
	guess=prompt("Guess my number between 1-100! Press Q to quit!");
	if(guess=="q"){
		alert("Goodbye!");
		break;
	}
	guessValidator();
	if(guessValidator(guess)==true){
		tries++;
		if(guess>answer){
			alert("Too high! Go lower!");
		}
		else if(guess<answer){
			alert("Too low! Go higher!");
		}
	}
	if(guessValidator(guess)==false){
		alert("Invalid input. Try again!");
	}
}
while(guess==answer){
	alert("You got it in "+tries+" tries! Great job!");
	break;
}

function guessValidator(guess){
	if(guess>0&&guess<101){
		return true;
	}
	else{
		return false;
	}
}
