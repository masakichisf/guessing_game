/*I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn the player should be told if they are right or wrong — and, if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.*/

//1. Generate a random number between 1 and 100.
let randomNum = Math.floor(Math.random() * 100) + 1;
//4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const hiOrLow = document.querySelector('.hiOrLow');
//3. Provide form field for player to enter guess
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
//2. Record the turn number the player is on. Start it on 1
let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
    if(guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    
    if (userGuess === randomNum) {
      lastResult.textContent = 'CONGRATULATIONS';
      hiOrLow.textContent = 'You guessed right!';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
        lastResult.textContent = 'WRONG.';
        if(userGuess < randomNum) {
          hiOrLow.textContent = 'Your number is too low.';
        } else if (userGuess > randomNum) {
          hiOrLow.textContent = 'Your number is too high.';
        }
    }
guessCount++;
guessField.value = '';
guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
guessField.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        checkGuess();
    }
});

//5. Next, check whether it is the correct number.
//6. If it is correct:
//Display congratulations message.
//Stop the player from being able to enter more guesses (this would mess the game up).
//Display control allowing the player to restart the game.
//7. If it is wrong and the player has turns left:
//Tell the player they are wrong.
//Allow them to enter another guess.
//Increment the turn number by 1.
//8. If it is wrong and the player has no turns left:
//Tell the player it is game over.
//Stop the player from being able to enter more guesses (this would mess the game up).
//Display control allowing the player to restart the game.
//9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.