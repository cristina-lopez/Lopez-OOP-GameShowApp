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
}