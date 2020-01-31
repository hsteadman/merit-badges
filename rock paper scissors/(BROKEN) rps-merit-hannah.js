/* RPS Merit Badge Hannah Steadman */

var rpsWords=["r", "p", "s"];
var setWinner=[[0,1,1],[0,2,0],[1,0,0],[1,2,1],[2,1,0],[2,0,1]];
var scoreKeeper=[0,0];
var outOf=parseInt(prompt("Best out of?"));pChoice=0;cChoice=0;turn=0;winner="";

main();

function main(){
	for(turn=0;turn<=outOf;turn++){
		userTurn();
		cpuTurn();
		if(pChoice==cChoice){
			if(cChoice==0){
				alert("We both chose Rock!");
				turn--;
			}
			else if(cChoice==1){
				alert("We both chose Paper!");
				turn--;
			}
			else{
				alert("We both chose Scissors!");
				turn--;
			}
		}
		else{
			turnWinner(pChoice,cChoice);
			updateScore();
		}
	}
	gameWinner();
	
	function userTurn(){
		pChoice=prompt("Rock (r), Paper (p), or Scissors (s)?");
		turn++;
		if(pChoice=="q"){
			turn=outOf;
		}
		else if(pChoice=="r"){
			pChoice=0;
			alert("You chose Rock!");
		}
		else if(pChoice=="p"){
			pChoice=1;
			alert("You chose Paper!");
		}
		else if(pChoice=="s"){
			pChoice=2;
			alert("You chose Scissors!");
		}
		return pChoice;
	}
	
	function cpuTurn(){
		cChoice=Math.floor(Math.random()*2);
		if(cChoice==0){
			alert("CPU chose Rock!");
		}
		else if(cChoice==1){
			alert("CPU chose Paper!");
		}
		else{
			alert("CPU chose Scissors!");
		}
		return cChoice;
	}
	
	function turnWinner(pChoice,cChoice){
		for(index=0;index<6;index++){
			if(pChoice==0&&cChoice==1){
				winner=cChoice;
				alert("Round Winner: CPU");
			}
			else if(pChoice==0&&cChoice==2){
				winner=pChoice;
				alert("Round Winner: You");
			}
			else if(pChoice==1&&cChoice==0){
				winner=pChoice;
				alert("Round Winner: You");
			}
			else if(pChoice==1&&cChoice==2){
				winner=cChoice;
				alert("Round Winner: CPU");
			}
			else if(pChoice==2&&cChoice==1){
				winner=pChoice;
				alert("Round Winner: You");
			}
			else if(pChoice==2&&cChoice==0){
				winner=cChoice;
				alert("Round Winner: CPU");
			}
			return winner;
		}
	}
	
	function updateScore(winner){
		if(winner==pChoice){
			scoreKeeper[index++,index];
		}
		else{
			scoreKeeper[index,index++];
		}
		return scoreKeeper[index];
	}
	
	function gameWinner(){
		if(scoreKeeper[1>0]){
			alert("You win!");
		}
		else if(scoreKeeper[1<0]){
			alert("Computer wins!");
		}
	}
}
