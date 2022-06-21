/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const div = document.getElementById('phrase').firstElementChild;
        for (let i = 0; i < this.phrase.length; i++) {
            if (/[a-z]/.test(this.phrase[i])) {
                let brokenLetter = `<li class = 'hide letter ${this.phrase[i]}'}> ${this.phrase[i]} </li>`;
                div.insertAdjacentHTML("beforeend", brokenLetter);
            } else {
                let brokenSpace = `<li class = 'space'> </li>`;
                div.insertAdjacentHTML("beforeend", brokenSpace);
            }
        }
    }
}
