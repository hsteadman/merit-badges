/* MULTIPLICATION QUIZ KATA */

/*  global initializations 
 * topRange: integer - start at 9
 * bottomRange: integer - start at 1
 * wrongAnswers: integer - start at 0
 * stop: boolean - start at false
 * again: boolean - start at true
 */ 

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
	var wrong=0; stop=false; again=true; question=0; x=Math.floor(Math.random()*6)+3; y=Math.floor(Math.random()*6)+3; equation=prompt(x+" + "+y+" = ?"); solution=x*y; tRange=0; bRange=0; wrongAnswers=0;
	var questions=setup();
	for(let question=questioner();question<=questions;question++){
		wrong+=questioner();
	}
	endQuiz(again);
	
	/* function setup
	  * set bottomRange
	  * set topRange
	  * set questions (how many?) 
	  * @param: none
	  * @return: questions
	  */
	function setup(){
		 questions=parseInt(prompt("How many questions?"));
		 bRange=parseInt(prompt("Lowest factor?"));
		 tRange=parseInt(prompt("Highest factor?"));
		 alert("Enter 'stop' to quit the program.");
		console.log("setup");
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
		let wrong=0;
		x=Math.floor(Math.random()*((tRange+1)-bRange))+bRange;
		y=Math.floor(Math.random()*((tRange+1)-bRange))+bRange;
		let equation=(x+" + "+y+" = ?");
		let solution=x*y;
		wrong=userInput(equation,solution);
		console.trace("Question "+question+": "+x+" * "+y+" with "+wrong+ "wrong.");
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
		stop=false;
		let wrong=0;
		let input=0;
		while(input!=solution&&stop==false){
			input=prompt(equation);
			if(input=="stop"){
				stop=true;
				questions=question;
				return wrong;
			}
			else if(input==solution){
				alert("Correct!");
			}
			else{
				alert("Incorrect. Try again!");
				wrong=1;
			}
		}
		return wrong;
	}

	function endQuiz(wrongAnswers){
		if(wrongAnswers>0||stop==true){
			again=confirm("You had "+wrongAnswers+" wrong out of "+questions+". \n Do this some more?");
		}
		else{
			again=confirm("You did it! Try higher factors and try this some more?");
		}
		if(again==true){
			main();
		}
		else{
			alert("Hope you learned your times tables!");
		}
	}
}
