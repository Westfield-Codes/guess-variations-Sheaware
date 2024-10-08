/* Define a function called rollDice */
function rollDice() {
    // create a variable called roll, set it equal to random 1-6
    let roll = Math.floor(Math.random()*6+1);
  if (roll == "6") alert("6! You win!");
  else alert("You rolled a "+roll);
    // else use a confirm and say: "You rolled a [roll]"
  // close the function block
  }
  
// NEW SECTION RECURSIVE 0.5 [SHEAWARE]

  // Create a global variable called turns, set it equal to 0
var turns = 0;
/* Define a function called rollDice */
function rollDice() {
  // create a variable called roll, set it equal to random 1-6
  let roll = Math.floor(Math.random()*6+1);
  // add 1 to turns
turns = turns + 1;
  // if roll equals 6, display "6! You won in [turns] turns."
if (roll == 6) alert("You rolled a 6! You won in "+turns+" turns");
  // otherwise:
else alert("You rolled a "+roll)
  // use a confirm and say: "You rolled a [roll]"
  // then call rollDice again.
rollDice();
  // close the else block
// close the function block
}

/* Simple Guess Program */
// create variable called guess, set to 0
var guess = 0;
// create variable called answer and store a random integer 1-100
var answer = Math.floor(Math.random()*100+1);
// display the answer for testing purposes only
alert(":3 "+answer);
// set guess equal to prompt asking user to "Guess a number, 1-100"
guess = prompt("Choose a number! Any number between 1 and 100!");
// if guess equals answer display "Correct!" 
if (guess == answer) alert("Correct!");
// or if guess is greater than answer display "Too high!" 
if (guess > answer) alert("Too high!");
// or display "Too low!" 
if (answer > guess) alert("Too low!");

/* Simple Guess Program */

// create global variable guess, set to 0
var guess = 0;
// create a global variable called answer and store a random integer 1-100
var answer = Math.floor(Math.random()*100+1);
// define function guessGame
function guessGame() {
// display the answer for testing purposes only
alert(":3 "+ answer);
// set guess equal to prompt asking user to "Guess a number, 1-100"
guess = prompt("Guess a number! Any number!");
// if guess equals answer display "Correct!" 
if (guess == answer) alert("Correct!");
// or if guess is greater than answer create a code block
else if (guess > answer) alert("That's too high!")
// display "Too high!" 
guessGame();
// call guessGame
// close the else code block
if (guess < answer) alert("You're too low!")
// otherwise open a code block
// display "Too low!" 
// call guessGame
guessGame();
// close the else code block
// end the function
}

/* Simple Guess Program */

// define function guessGame
function guessGame() {

  // generate a random integer 1-100
var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
console.log(answer);
alert(":3 "+answer);
  // create guess and set equal to 0 
var guess = 0;
  // loop while guess is not equal to answer
while (guess != answer) { 
    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("Guess a number!");
    // if guess equals answer display "Correct!" 
if (guess == answer) alert("Correct!");
    // or if guess is greater than answer display "Too high!" 
else if (guess >= answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
else if (guess <= answer) alert("Too low!");
    // else say "Bad input"
else alert("Bad loop ;(");
  // end the loop
}
// end the function
}

/* Simple Guess Program */

// define function guessGame
function guessGame() {
  // generate a random integer 1-100
var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
console.log(answer);
alert(":3 "+answer);
  // create guess and set equal to 0 
var guess = 0;
  // loop while guess is not equal to answer or to "q"
while (guess != answer && guess != "q") {
    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("Input a number");
    // if guess equals "q" display "Quitter!"
if (guess == "q") alert("Quitter!");
    // or if guess equals answer display "Correct!" 
else if (guess == answer) alert("Correct!");
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("Too High!");
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("Too Low!");
    // or say "Bad input"
else alert("Bad Input ;(");
  // end the loop
}
// end the function
}

/* Guess Game Program by Sheaware
 * Adds the ability to play again. 
 */

/* newGame is an outer loop giving the user an option 
 * to play again, using a boolean variable called again.
 */

// define function newGame
function newGame() {
  // create a Boolean variable for again, set to true
var again = true;
  // loop as long as again is true 
while (again == true) {
    // run the guessGame function 
guessGame();
    // ask to play again with again set to a confirm
again = confirm("Want to play again?");
    // close the loop
}
  // thank the player for playing
alert("Thank you for playing");
  // close the function
}

  
// create a function called guessGame 
function guessGame() {
  // create guess and set equal to 0 
var guess = 0;
  // create tries and set equal to 0 
var tries = 0;
  // create variable answer and generate a random integer 1-100
var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
alert(":3 "+answer);
  // loop while guess is not equal to answer
while (guess != answer) {
    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("Guess a number");
    // add one to tries
tries + 1; 
    // if guess equals answer display "Correct in [tries] tries!" 
if (guess == answer) alert("Correct!");
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("Too low!");
    // if it's none of those, say "Bad Input!"
else alert("Bad Input!");
    // end the loop
}
  // end the function
}

/* Guess Game Program */

// define function newGame
function newGame() {
  // create a Boolean variable for again, set to true
var again = true;
  // run the guessGame function
guessGame()
  // loop as long as again is true 
while (again == true) {
    // ask to play again with again set to a confirm
ask = confirm("Do you want to play again?");
    // if again is true run the guessGame function
if (again == true) guessGame();
    // close the loop
}
  // thank the player for playing
alert("Thank you for playing");
  // close the function
}

// create a function called guessGame
function guessGame() {
  // create guess and set equal to 0 
var guess = 0;
  // create tries and set equal to 0 
var tries = 0;
  // create variable answer and generate a random integer 1-100
var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
alert(":3 "+answer);
console.log(answer);
  // loop while guess is not equal to answer
while (guess != answer) {
    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("Guess a number!");
    // add one to tries
tries + 1;
    // if guess equals answer display "Correct in [tries] tries!" 
if (guess == answer) alert("Correct!");
    // or if guess is "q" break the loop
else if (guess == "q" || guess == "quit" || guess == "Quit" || guess == "Q") alert("Quitter!"); 
    // or if guess is greater than answer display "Too high!" 
else if (guess >= answer) alert("Too High!");
    // or if guess is less than answer display "Too low!" 
else if (guess <= answer) alert("Too low!");
    // if it's none of those, say "Bad Input!"
else alert("Bad Input!");
    // end the loop
  }
  // end the function
}