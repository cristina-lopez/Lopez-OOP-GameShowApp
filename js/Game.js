/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('Burst your bubble'), 
        new Phrase('Spread LOVE everywhere you go'), 
        new Phrase('Curiousity killed the cat'), 
        new Phrase('rise and shine'), 
        new Phrase('hold your horses')];
        this.activePhrase = 'null';
    }

    /**
     * selects random phrase from phrases property
     * @return {object} phrase object chosen to be used
     */
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        document.getElementById('overlay').style.display = "none";
        const randomPhrase = game.getRandomPhrase();
        this.activePhrase = new Phrase(randomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();
    };

    /**
     * 
     */
    handleInteraction() {

    };

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        const brokenPhrase = document.getElementById('phrase').firstElementChild.children;
        let win;
        for (let i = 0; i < brokenPhrase.length; i++) {
            if (brokenPhrase[i].classList.contains("hide")) {
                win = false;
            } else {
                win = true;
            }
        }
        return win;
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    /// DOESNT WORK
    removeLife() {
        for (let i = 0; i < 5; i++) {
            if (this.missed < 5) {
                let tries = document.getElementById('scoreboard').firstElementChild.children[i];
                tries.src = 'images/lostHeart.png';
                this.missed += 1;
            } else if (this.missed === 5) {
                this.gameOver(false);
            }
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - whether or not the user won the game
     */
    gameOver(gameWon) {
        document.getElementById('overlay').style.display = "";
        if (gameWon) {
            document.getElementById('game-over-message').textContent = "You win!";
            document.getElementById('overlay').classList.remove('start');
            document.getElementById('overlay').classList.add('win');
        } else {
            document.getElementById('game-over-message').textContent = "You lose!";
            document.getElementById('overlay').classList.remove('start');
            document.getElementById('overlay').classList.add('lose');
        }
    };
}