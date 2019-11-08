/* nim simple by hannah */
/* globals */
var games=0;
var again=true;
var next=0;
var count=0;
var turn=0;
/* main */
while(again==true){
	next=games%2;
	games++;
	alert("Game "+games+" start!");
	count=0;
	while(count<21){
		if(next==0){
			turn=CPUTurn();
			count+=turn;
			alert("The count is now "+count);
			next=nextSwitch(next);
		}
		else{
			turn=userTurn();
			count+=turn;
			alert("The count is now "+count);
			next=nextSwitch(next);
		}
	}
	declareWinner();
	games++;
	alert("Games played: "+games);
	if(playAgain()==false){
		break;
	}
}
alert("Thanks for playing Nim with me!");

/* functions */
function CPUTurn(){
	turn=Math.floor(Math.random()*3)+1;
	alert("CPU counts "+turn);
	return turn;
}

function userTurn(){
	var goodTurn=false;
	while(goodTurn==false){
		turn=prompt("Pick a number 1-3");
		if(turn>0&&turn<4){
			goodTurn=true;
			alert("You count "+turn);
		}
		else{
			alert("Number is out of range, try again");
		}
	}
	return Number(turn);
}

function nextSwitch(next){
	if(next==0){
		next=1;
		return next;
	}
	else{
		next=0;
		return next;
	}
}

function declareWinner(){
	if(next==0){
		alert("You lose!");
	}
	else{
		alert("You win!");
	}
}

function playAgain(again){
	again=prompt("Play again? (y/n)");
	if(again=="y"){
		return true;
	}
	else{
		return false;
	}
}
