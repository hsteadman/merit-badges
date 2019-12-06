/* nim trainer merit badge by hannah */
/* globals */
var games=0;
var again=true;
var next=0;
var count=0;
var turn=0;
var gameType=prompt("Game type Simple or Trainer?");
/* main */
while(again==true){
	pickGame(gameType);
	next=games%2;
	games++;
	alert("Game "+games+" start!");
	count=0;
	while(count<21){
		if(next==0){
			turn=CPUTrainer(count);
			count+=turn;
			alert("The count is now "+count+".");
			next=nextSwitch(next);
		}
		else{
			turn=userTurn();
			count+=turn;
			alert("The count is now "+count+".");
			next=nextSwitch(next);
		}
	}
	declareWinner();
	alert("Games played: "+games);
	if(playAgain()==false){
		break;
	}
}
alert("Thanks for playing Nim with me!");

/* functions */
function pickGame(gameType){
	gameType=prompt("Game type Simple or Trainer?");
	if(gameType==simple){
		gameType=simple;
		return gameType;
	}
	else{
		gameType=trainer;
		return gameType;
	}
}

function CPUTrainer(count){
	let turn=0;
	if(count%4!=0){
		turn=4-(count%4);
	}
	else if(count==20){
		turn=1;
	}
	else{
		turn=Math.floor(Math.random()*3)+1;
	}
	alert("CPU counts "+turn);
	count+=turn;
	return count;
}

function userTurn(){
	var goodTurn=false;
	while(goodTurn==false){
		turn=prompt("Pick a number 1-3");
		if(turn>0&&turn<4&&Math.floor(turn)==turn){
			goodTurn=true;
			alert("You count "+turn+".");
		}
		else{
			alert("Number is out of range, try again.");
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
