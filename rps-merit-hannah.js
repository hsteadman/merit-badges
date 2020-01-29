/* RPS Merit Badge Hannah Steadman */

var rpsWords=["r", "p", "s"];
var setWinner=[[0,1,1][0,2,0],[1,0,0],[1,2,1],[2,1,0],[2,0,1]];
var scoreKeeper=[0,0];
var outOf=parseInt(prompt("Best out of?"));pChoice="";cChoice=null;turn=0;

main();

function main(){
	for(turn=0;turn<outOf;turn++){
		userTurn();
		cpuTurn();
		if(pChoice==cChoice){
			alert("We both chose "+cChoice+"!");
			turn--;
		}
		else{
			turnWinner(pChoice,cChoice);
			updateScore();
		}
	}
	
	function userTurn(){
		pChoice=prompt("Rock (r), Paper (p), or Scissors (s)?");
		turn++;
		if(pChoice=="q"){
			turn=outOf;
		}
		return pChoice;
	}
	
	function cpuTurn(){
		cChoice=Math.floor(Math.random()*2);
		return cChoice;
	}
	
	function turnWinner(pChoice,cChoice){
		for(index=0;index<6;index++){
			if(setWinner[index,0]==pChoice&&setWinner[index,1]==cChoice){
				let winner=setWinner[index,2];
				alert(winner+" wins!");
				return winner;
			}
		}
	}
	
	function updateScore(winner){
		if(winner==pChoice){
			scoreKeeper[index++,0];
		}
		else{
			scoreKeeper[0,index++];
		}
		return scoreKeeper[index];
	}
	
	function gameWinner(){
		if(scoreKeeper[index]==scoreKeeper[index,0]){
			alert("You win!");
		}
		else{
			alert("Computer wins!");
		}
	}
}