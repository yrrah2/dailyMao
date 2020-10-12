var quoteVal = -1;

const generateQuote = (minQuoteVal, maxQuoteVal) => {
        var quoteRange = quoteArray.slice(minQuoteVal, maxQuoteVal);    // Select range
        var rnd = Math.floor(Math.random() * quoteRange.length);        // Choose random quote from range
        while (rnd == quoteVal){rnd = Math.floor(Math.random() * quoteRange.length)}; // Make sure the choice isn't the current quote
        quoteVal = rnd;
        var chosenQuote = quoteRange[rnd];                            // Declare chosen quote

        $("#quote_chapter").text(chosenQuote[2]);                       // Display the chapter the quote appears in
        $("#quote_reference").text(chosenQuote[3]+':'+chosenQuote[4]);  // Display the quote reference
        $("#quote_proper").text(chosenQuote[0]);                        // Display the quote itself
        $("#quote_source").text(chosenQuote[1]);                        // Display the source of the quote as listed in QfMZ
};

const pageload = () => { 
        generateQuote(0, 426);
}

window.onload = pageload;
