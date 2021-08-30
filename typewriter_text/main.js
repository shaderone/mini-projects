class TypeWriter {
    constructor(textElm, words, delay = 3000) {
        this.textElm = textElm;
        this.words = words;
        this.waitTime = parseInt(delay, 10);
        this.currentTypedWord = '';
        this.wordIndex = 0;
        this.characterIsDeleting = false;
        this.type();
    }
    type() {
        // Get current word index
        const currentWordIndex = this.wordIndex % this.words.length;
        // Get fullText of the current word
        const currentWord = this.words[currentWordIndex];

        if (this.characterIsDeleting) {
            // Remove character
            this.currentTypedWord = currentWord.substring(0, this.currentTypedWord.length - 1);
        } else {
            // Add character
            this.currentTypedWord = currentWord.substring(0, this.currentTypedWord.length + 1);
        }
        // Insert the word to dom, which is typed out
        this.textElm.innerHTML = `<span class='inner-text'>${this.currentTypedWord}</span>`;

        // TypeSpeeds
        let typeSpeed = 100;

        if (this.characterIsDeleting) {
            typeSpeed /= 2;
        }

        // Check if a word has finised typing
        if (this.currentTypedWord === currentWord) {
            // wait before deleting the current word
            typeSpeed = this.waitTime;
            this.characterIsDeleting = !this.characterIsDeleting; //back to true
        } else if (this.currentTypedWord == '') {
            this.characterIsDeleting = !this.characterIsDeleting; //back to false
            this.wordIndex++;
            // wait before typing next word
            typeSpeed = 500;
        }

        setTimeout(() => {
            this.type();
        }, typeSpeed);
    }
}

const Initialize = () => {
    const textElm = document.querySelector('.textContent')
    const words = JSON.parse(textElm.getAttribute('data-words'))
    const delayTime = textElm.getAttribute('data-wait')

    new TypeWriter(textElm, words, delayTime)
}

window.onload = function() {
    Initialize() 
}

// es5 way
/*
const TypeWriter = function (textElm, words, delay = 3000) {
    this.textElm = textElm;
    this.words = words;
    this.waitTime = parseInt(delay, 10);
    this.currentTypedWord = '';
    this.wordIndex = 0;
    this.characterIsDeleting = false;
    this.type()
}

TypeWriter.prototype.type = function () {
    // Get current word index
    const currentWordIndex = this.wordIndex % this.words.length
    // Get fullText of the current word
    const currentWord = this.words[currentWordIndex]

    if (this.characterIsDeleting) {
        // Remove character
        this.currentTypedWord = currentWord.substring(0, this.currentTypedWord.length - 1)
    } else {
        // Add character
        this.currentTypedWord = currentWord.substring(0, this.currentTypedWord.length + 1)
    }
    // Insert the word to dom, which is typed out
    this.textElm.innerHTML = `<span class='inner-text'>${this.currentTypedWord}</span>`

    // TypeSpeeds
    let typeSpeed = 100

    if (this.characterIsDeleting) {
        typeSpeed /= 2;
    }

    // Check if a word has finised typing
    if (this.currentTypedWord === currentWord) {
        // wait before deleting the current word
        typeSpeed = this.waitTime
        this.characterIsDeleting = !this.characterIsDeleting //back to true
    } else if (this.currentTypedWord == '') {
        this.characterIsDeleting = !this.characterIsDeleting //back to false
        this.wordIndex++
        // wait before typing next word
        typeSpeed = 500
    }

    setTimeout(() => {
        this.type()
    }, typeSpeed);
}
*/
