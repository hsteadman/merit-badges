/* guess advanced functions merit badge by hannah */

var games=0;
var again=true;
var totalTurns=0;
while(again==true){
	games++;
	var guess=0;
	var turns=0;
	var answer=Math.floor(Math.random()*100)+1;
	console.log(answer);
	while(guess!=answer){
		guess=prompt("Guess my number between 1-100! Press q to quit!");
		turns++;
		if(guess=="q"){
			alert("Goodbye!");
			break;
		}
		if(validate(guess)==true){
			if(guess<answer){
				alert("Too low! Go higher!");
			}
			else if(guess>answer){
				alert("Too high! Go lower!");
			}
			else if(guess==answer){
				gameStats(turns);
				again=newGame();
			}
		}
	}
	if(guess=="q"){
		break;
	}
}

function validate(guess){
	if(guess>0&&guess<101){
		return true;
	}
	else{
		return false;
	}
}

function gameStats(turns){
	alert("You guessed it in "+turns+" turns! Great job!");
	totalTurns+=turns;
	var averageTurns=totalTurns/games;
	alert("You won "+games+" games with an average of "+averageTurns+" turns per game! Great job!");
}

function newGame(again){
	again=prompt("Play again? (y/n)");
	if(again=="y"){
		return true;
	}
	else{
		alert("Thanks for playing!");
		return false;
	}
}
