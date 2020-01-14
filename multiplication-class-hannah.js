/* MULTIPLICATION QUIZ KATA */

/*  global initializations 
 * topRange: integer - start at 9
 * bottomRange: integer - start at 1
 * wrongAnswers: integer - start at 0
 * stop: boolean - start at false
 * again: boolean - start at true
 */ 
//var tRange=0;
//var bRange=0;
var wrong=0;
var stop=false;
var again=true;
var questions=setup();
var question=0;
var x=Math.floor(Math.random()*6)+3;
var y=Math.floor(Math.random()*6)+3;
var equation=prompt(x+" + "+y+" = ?");
var solution=x*y;

/* main code 
 * use a while loop to keep calling main function while again = true. 
 */
 
while(again==true&&stop==false){
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
	for(let question=questioner();question<=questions;question++){
		questioner();
		userInput();
	}
	alert("You did it! You got "+wrong+" out of "+questions);
	again=confirm("Do this again?");
}

/* function setup
 * set bottomRange
 * set topRange
 * set questions (how many?) 
 * @param: none
 * @return: questions
 */
 
 function setup(){
	 questions=parseInt(prompt("How many questions?"));
	// tRange=parseInt(prompt("Highest factor?"));
	// bRange=parseInt(prompt("Lowest factor?"));
	alert("awawa");
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
	userInput();
	alert("wawawa");
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
 
function userInput(equation,solution,answer,x,y){
	answer=prompt(equation);
	if(answer=="stop"){
		again=false;
	}
	else if(answer==solution){
		alert("Correct!");
	}
	else{
		alert("Incorrect!");
		wrong++;
	}
	alert("ewaeweae");
	return wrong;
}
