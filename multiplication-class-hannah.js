/* MULTIPLICATION QUIZ KATA */

/*  global initializations 
 * topRange: integer - start at 9
 * bottomRange: integer - start at 1
 * wrongAnswers: integer - start at 0
 * stop: boolean - start at false
 * again: boolean - start at true
 */ 
var topRange=9;
var bottomRange=1;
var wrongAnswers=0;
var stop=false;
var again=true;
var question=0;
var questions=1;
/* main code 
 * use a while loop to keep calling main function while again = true. 
 */
while(again==true){
	main();
}
alert("Thanks for playing!");
/* functions */

/* function main
 * call setup to set top and bottom range and return number of questions 
 * run a For loop for each question. 
 * call questioner, which returns 0 or 1 wrong
 * add questioner return value to wrongAnswers
 * report on results
 * @param none
 * @return again (boolean)
 */ 
function main(){
	setup();
	for(question=1;question<=questions;question++){
		questioner();
		userInput();
		if(wrongAnswers==0){
			alert("Charlie, you've won!");
		}
		else{
			alert("You got "+wrongAnswers+" out of "+questions);
		}
	}
	again=prompt("Do this again?");
	if(again=="y"){
		again=true;
	}
	else{
		again=false;
	}
}
/* function setup
 * set bottomRange
 * set topRange
 * set questions (how many?) 
 * @param: none
 * @return: questions
 */
 function setup(){
	 let questions=prompt("How many questions?");
	 let topRange=prompt("Highest factor?");
	 let bottomRange=prompt("Lowest factor?");
	 return questions;
 }
/* function questioner 
 * generate X and Y factors
 * concatenate X & Y for equation (a string prompt)
 * calculate solution
 * call userInput, sending equation and solution
 * userInput returns # wrong (0 or 1) so take this and return it to main function
 * @param none
 * @return wrong
 */
function questioner(){
	var x=Math.floor(Math.random()*6)+3;
	var y=Math.floor(Math.random()*6)+3;
	var equation=prompt(x+" + "+y+" = ?");
	var solution=x*y;
	var wrong=0;
	userInput(equation,solution);
	return wrong;
}
/* function userInput
 * prompt the equation to the user, take input
 * if input equals "stop" set stop as true, otherwise
 * check if input equals solution (say "correct!" and return wrong)
 * Add 1 to wrong if incorrect and say "incorrect. try again. enter 'stop' to quit trying"
 * keep asking until solution entered
 * return 0 if 0 wrong, 1 if 1 or more wrong.
 * @param none
 * @return wrong (integer, 0 or 1)
 */ 
function userInput(equation,solution){
	let answer=prompt(x+" + "+y+" = ?");
	if(answer=="stop"){
		let stop=true;
	}
	else if(answer==solution){
		alert("Correct!");
		wrong=0;
	}
	else{
		alert("Incorrect!");
		wrong++;
	}
	return wrong;
}