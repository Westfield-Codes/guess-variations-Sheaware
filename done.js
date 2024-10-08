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

