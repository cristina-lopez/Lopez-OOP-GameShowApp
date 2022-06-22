/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Displays phrase on game board
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
    };

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - letter to check
     */
    checkLetter(letter) {
        return (this.phrase.includes(letter));
    };

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - letter to display
     */
    showMatchedLetter(letter) {
        const brokenPhrase = document.getElementById('phrase').firstElementChild.children;
            for (let i = 0; i < brokenPhrase.length; i++) {
                if (brokenPhrase[i].textContent.includes(letter)) {
                    document.getElementById('phrase').firstElementChild.children[i].classList.remove('hide');
                    document.getElementById('phrase').firstElementChild.children[i].classList.add('show');
                }
            }
    };
}