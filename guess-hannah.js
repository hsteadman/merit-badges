/* guess merit badge by hannah */

var answer=Math.floor(Math.random()*100)+1;
var guess=0;
var tries=0;
console.log(answer);
while(guess!=answer&&guess!="q"){
	guess=prompt("Guess my number between 1-100! Press Q to quit anytime!");
	tries++;
	if(guess<answer){
		alert("Too low! Go higher!");
	}
	else if(guess>answer){
		alert("Too high! Go lower!");
	}
	else if(guess=="q"){
		alert("Goodbye!");
		break;
	}
	else{
		alert("You got it in "+tries+" tries! Great job!");
	}
}
