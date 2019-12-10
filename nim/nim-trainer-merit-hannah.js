/* 
 * Nim Simple - Mr. M.'s Version 
 * Note: Global variables have been passed as parameters.  This is not best practice, but helpful for tracking.
 */

/* Initialize Globals */
var games=0;
var again=true;
var gameType=null;

/* Main */
while(again==true){
	var count=0;
	var turn=0;
	var next=games%2;
	gameType=pickGame(gameType);
	while(count<=20){
		while(next==0&&gameType=="simple"){
			count=CPUTurn(count);
			alert("Count is now "+count);
			next=1;
		}
		while(next==0&&gameType=="trainer"){
			count=CPUTrainer(count);
			alert("Count is now "+count);
			next=1;
		}
		while(next==1){
			count=userTurn(count);
			alert("Count is now "+count);
			next=0;
		}
	}
	declareWinner();
}
alert("Thanks for playing Nim with me!");

/* Functions */

/* CPU Turn -- random turn but not purposely losing or going over 21 */
function CPUTurn(count){
	let goodTurn = false;
	let turn=0;
	while (goodTurn == false) {
		turn = Math.floor(Math.random()*3)+1;
		if (turn == 1 || turn > 1 && count+turn < 21) goodTurn = true;
	}
	alert("CPU counts "+turn);
	count += turn;
	return count;
}

function CPUTrainer(count){
	while(count%4==0){
		if(count==20){
			turn=1;
		}
		else{
			turn=Math.floor(Math.random()*3)+1;
		}
		turn=4-(count%4);
	}
	alert("CPU counts "+turn);
	count+=turn;
	return count;
}

/* User Turn: prevents entering invalid turns */
function userTurn(turn){
	turn=prompt("Enter 1, 2, or 3");
	if(turn==1||turn==2||turn==3){
		return count+=Number(turn);
	}
	else{
		alert("Invalid input. Must be 1, 2, or 3");
	}
}

/* Next Switch: changes turns */
function nextSwitch(next){
	if(next==0){
		next=1;
	}
	else{
		next=0;
	}
	return next;
}

/* Declare Winner: Specifies winner value and asks for play again input */
function declareWinner(next){
	if(next==0){
		alert("I win!");
	}
	else{
		alert("You win!");
	}
	games++;
	again=prompt("Play again? y/n");
	if(again=="y"){
		again=true;
	}
	else{
		again=false;
	}
	return again;
}

function pickGame(gameType){
	gameType=prompt("Simple or Trainer?");
	alert("Game type chosen: "+gameType);
	return gameType;
}
