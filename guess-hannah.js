/* guess merit badge by hannah */
// guessing game code just like you practiced girl you got this
// remember: variables. prompt the guesser for the answer and alert them. while, if, else if, else. first one too low, second one too high, q to quit as a way to get out of the loop quick, and last one got it. dont forget to keep track of the answer somewhere, and finish every line with a "bow" ;) lets do this :D

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