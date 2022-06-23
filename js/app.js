/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/** 
 * Listens for click on `#btn_reset` and calls startGame() on game object
 */
let game; 
const resetButton = document.getElementById('btn__reset');
resetButton.addEventListener('click', function() {
    game = new Game();
    game.startGame();
});

/**
 * Listens for click on qwerty buttons and calls handleInteraction on game object
 */
const button = document.getElementById('qwerty');
button.addEventListener('click', (e) => {
    if (e.target.className==='key') {
        game.handleInteraction(e.target);
    }
});

/**
 * Listens for keybaord presses and calls handleKeypress on game object
 */
let letters = document.getElementsByClassName('key');
document.addEventListener('keydown', (e) => {
    if (e.key.match(/[a-z]/i)) {
        for (let i = 0; i < letters.length; i++) {
            if (letters[i].textContent === e.key.toLowerCase() && !(letters[i].className.includes('wrong')) && !(letters[i].className.includes('chosen'))) {
                game.handleInteraction(letters[i]);
            }
        }
    }
});
