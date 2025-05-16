

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
let wordInex = 0;

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

    // Put the quote into an array of words 
    words = quote.split(' ');
    // Reset the word index for tracking
    wordIndex = 0;


    // UI updates
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // Convert into string and set as innerHTML on quote display
    quoteElemen.innerHTML = spanWords.join('');
    // Highlight the first word
    quotesElement.childNode[0].className = 'highlight';
    // Clear any prior messages 
    messageElement.innerText = '';


    // Setup and Clear the textbox
    typedValueElement.value = '';
    // Set focus
    typedValueElement.focus();
    // Set the even handler

    // Start the timer
    startTime = new Date().getTimer();
});
