/* nim simple by hannah */
// this code is broken right now
/* globals*/
var games=0;
var again=true;
var turn=0;
var count=0;
var turns=0;
var next=0;
/* main */
while(again==true){
	count=0;
	turns=0;
	next=0;
	if(next==0){
		turn=CPUTurn();
		count+=turn;
		alert("Count: "+count);
		if(count<21){
			turns++;
			nextSwitch();
		}
		else if(count>=21){
			winner();
			games++;
			playAgain(again);
		}
	}
	if(next==1){
		turn=userTurn();
		count+=turn;
		alert("Count: "+count);
		if(count<21){
			turns++;
			nextSwitch();
		}
		else if(count>=21){
			winner();
			games++;
			playAgain(again);
		}
	}
}

/* functions */
function userTurn(turn){
	turn=prompt("Input number 1-3");
	if(turn>0&&turn<4){
		return true;
	}
	else{
		alert("Number out of range, please try again.");
		return false;
	}
}

function CPUTurn(turn){
	turn=Math.floor(Math.random()*3)+1;
	return turn;
}

function nextSwitch(next){
	if(next==0){
		return 1;
	}
	else if(next==1){
		return 0;
	}
}

function winner(next){
	if(next==0){
		alert("You lose!");
	}
	else if(next==1){
		alert("You win!");
	}
}

function playAgain(again){
	again=prompt("Play again? y/n");
	if(again=="y"){
		return true;
	}
	else{
		return false;
	}
}
