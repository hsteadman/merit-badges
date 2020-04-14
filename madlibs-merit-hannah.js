 /* Madlibs - JS - Only version - hannah
 * See flowchart: https://www.lucidchart.com/documents/view/1ac364ec-8af0-4668-b874-f3eba4b9e570
 * Traditional MadLibs game: Author creates a sentence, decides which words to get replaced, enters
 * parts of speech for those words. Gets player(s) who enter new words that match the parts of speech
 * without knowing the original sentence.  Then everyone gathers to read the new silly sentence. 
 */
 main();
 
 /* Function Main
 * Manages game play: initializes variables and calls authorSetup and playerPopulate.  
 * Based on returned value of displayResult, recursively calls itself or alerts thanks and ends. 
 * All functions are within Main so that variables can be accessed without globals. 
 * @param none
 * @return none
 */
 function main(){
	 var sentenceString=null, sentence=[], toReplace=0, replaceIndex=0, replacement=null, replacements=[], newSentence=null;
	 authorSetup();
	 //playerPopulate();
	 //displayResult();
	 if(again==true){
		 main();
	 }
	 alert("Thanks for playing!");
	 
  /* Functions */

  /* Function authorSetup
   * Author enters a sentence string. It is converted to an array. 
   * Author enters number of words to replace, then which ones, and replaces 
   * those words with their corresponding parts of speech in the array.
   * @param none
   * @return none
   */  
   function authorSetup(){
	   sentenceString=prompt("Input a sentence for a Madlib.");
	   sentence=sentenceString.split(" ");
	   toReplace=prompt("Number of words to replace?");
	   for(i=0; i<toReplace; i++){
		   replaceIndex=prompt("Replace which word in sentence?");
		   replaceIndex--;
		   replacements[i]=replaceIndex;
		   let partOfSpeech=prompt("What part of speech is "+sentence[replaceIndex]+"?");
		   sentence[replacements[i]]=partOfSpeech;
	   }
	   alert("Thanks, Author! Go get player now.");
	   playerPopulate();
   }

  /* Function playerPopulate
   * Ask player for replacement words.
   * @param none
   * @return none
   */
   function playerPopulate(){
	   for(i=0; i<toReplace; i++){
		   console.log(sentence + replacements[i]);
		   replacement=prompt("Enter a "+sentence[replacements[i]]);
		   sentence[replacements[i]]=replacement;
	   }
	   displayResult();
   }
	
 /* Function displayResult
   * Creates a new sentence from the sentence array. 
   * Instructs player to get author so they can see the new sentence
   * Prompts to play again, returns confirm result.
   * @param none
   * @return again (boolean)
   */
   function displayResult(){
	   newSentence=sentence.join(" ");
	   let ready=confirm("Get author, then press OK to see new sentence.");
	   if(ready==true){
		   alert(newSentence);
	   }
	   let again=confirm("Play again?");
	   return again;
   }
}