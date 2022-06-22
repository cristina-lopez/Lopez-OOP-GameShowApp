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
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - the clicked button element
     */
    handleInteraction(button) {
        button.disabled = true;
        let buttonPressed = button.textContent;
        if (!this.activePhrase.checkLetter(buttonPressed)) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(buttonPressed);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
    };

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        const phraseCount = document.getElementsByClassName('letter').length;
        const letterCount = document.getElementsByClassName('show').length;
        return phraseCount === letterCount;
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
            if (this.missed < 4) {
                let tries = document.getElementById('scoreboard').firstElementChild.children[this.missed].firstChild;
                tries.src = 'images/lostHeart.png';
                this.missed += 1;
            } else if (this.missed === 4) {
                this.gameOver(false);
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
        game.resetGame();
    };

    /**
     * method to help reset the game after you win or lose
     */
    resetGame() {
        game.resetPhrase();
        game.resetQwerty();
        game.resetHearts();
    };

    /**
     * Helper function for resetGame() used to reset the phrase on the screen
     */
    resetPhrase() {
        let phraseDiv = document.getElementById('phrase');
        phraseDiv.innerHTML = `<ul></ul>`;
    };

    /**
     * Helper function for resetGame() used to reset the screen keyboard
     */
    resetQwerty() {
        let qwertybuttons = document.getElementsByClassName("key");
        for (let i = 0; i < qwertybuttons.length; i++) {
            qwertybuttons[i].disabled = false;
            qwertybuttons[i].classList.remove("wrong");
            qwertybuttons[i].classList.remove("chosen");
            qwertybuttons[i].classList.add("key");
        }
    };

    /**
     * Helper function for resetGame() used to reset the lives on the screen
     */
    resetHearts() {
        let hearts = document.getElementById('scoreboard').firstElementChild.children;
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].firstChild.src = 'images/liveHeart.png';
        }
    };
}