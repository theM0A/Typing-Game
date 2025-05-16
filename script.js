

// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;

// the starting time
let startTime = Date.now();

// page elements
const quoteElement = document.getElementById('quote');
const typedValueElement = document.getElementById('typed-value');
const messageElement = document.getElementById('message');

document.getElementById('start').addEventListener('click', () => {
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];

    /* Put the quote into an array of words so we can track 
    the word the player is currently typing.  ' ' is the spacing*/
    words = quote.split(' '); 

    /* Reset the word index for tracking, set to 0 since
    the player will start on the first word*/
    wordIndex = 0;


    // UI updates
    /* Create an array of span elements so we can set a class.
    Array created contains each word inside a span element
    Allows us to highlight the word the on the display.*/
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
   
    /* Convert into string and set as innerHTML on quote display 
    Used to update the innerHTML on quoteElement 
    We will display the quote to the player*/
    quoteElement.innerHTML = spanWords.join('');

    /*Highlight the first word by setting the className 
    of the first (span element to highlight) it as yellow*/
    quoteElement.childNode[0].className = "highlight";

    // Clear any prior messages 
    messageElement.innerText = '';


    // Setup and Clear the textbox
    // Clear 
    typedValueElement.value = '';
    // Set focus
    typedValueElement.focus();
    // Set the even handler

    // Start the timer
    startTime = new Date().getTimer();
});

typedValueElement.addEventListener('input', () => {
    // Get the current word
    const currentWord = words[wordIndex];
    // Get the current value
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        // end of sentence 
        // Display success
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You Finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
        } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        // End of word
        // Clear the typedValueElement for the new word
        typedValueElement.value = '';
        // move to the next word 
        wordIndex++;
        // reset the class name for all elements in quote
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        // highlight the new word
        quoteElement.childNodes[wordIndex].className = 'highlight';
        } else if (currentWord.startsWith(typedValue)) {
          // currently correct
          // highlight the next word
          typedValueElement.className = '';
        } else {
            // error state
            typedValueElement.className = 'error';
        }
    });
