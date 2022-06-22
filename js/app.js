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