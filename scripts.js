const generateQuote = (minQuoteVal, maxQuoteVal) => {
                        var range = maxQuoteVal - minQuoteVal + 1;                      // Find number of values between selected range
                        var rnd =  Math.floor(Math.random() * range) + minQuoteVal;     // Choose random quote in range
                        var chosenQuote = quoteArray[rnd];                              // Save randomly chosen quote

                        $("#quote_chapter").text(chosenQuote[2]);                       // Display the chapter the quote appears in
                        $("#quote_reference").text(chosenQuote[3]+':'+chosenQuote[4]);  // Display the quote reference
                        $("#quote_proper").text(chosenQuote[0]);                        // Display the quote itself
                        $("#quote_source").text(chosenQuote[1]);                        // Display the source of the quote as listed in QfMZ
};

const pageload = () => { 
        generateQuote(0, 426);
}

window.onload = pageload;
