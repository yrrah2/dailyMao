console.log(quoteArray);

// ref: http://stackoverflow.com/a/1293163/2343
// This function reads the CSV quote file and
// converts it to a useable array
const CSVToArray = ( strData, strDelimiter ) => {
        strDelimiter = (strDelimiter || ",");
        var objPattern = new RegExp(
                (
                        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
                        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
                        "([^\"\\" + strDelimiter + "\\r\\n]*))"
                ),
                "gi"
        );
        var arrData = [[]];
        var arrMatches = null;
        while (arrMatches = objPattern.exec( strData )){
                var strMatchedDelimiter = arrMatches[ 1 ];
                if (
                        strMatchedDelimiter.length &&
                        strMatchedDelimiter !== strDelimiter
                ){
                        arrData.push( [] );
                }
                var strMatchedValue;
                if (arrMatches[ 2 ]){
                        strMatchedValue = arrMatches[ 2 ].replace(
                                new RegExp( "\"\"", "g" ),
                                "\""
                        );
                } else {
                        strMatchedValue = arrMatches[ 3 ];
                }
                arrData[ arrData.length - 1 ].push( strMatchedValue );
        }
        return( arrData );
}

const generateQuote = (minQuoteVal, maxQuoteVal) => {
                        var range = maxQuoteVal - minQuoteVal + 1;                      // Find number of values between selected range
                        var rnd =  Math.floor(Math.random() * range) + minQuoteVal;     // Choose random quote in range
                        var chosenQuote = quoteArray[rnd];                              // Save randomly chosen quote

                        $("#quote_chapter").text(chosenQuote[2]);                       // Display the chapter the quote appears in
                        $("#quote_reference").text(chosenQuote[3]+':'+chosenQuote[4]);  // Display the quote reference
                        $("#quote_proper").text(chosenQuote[0]);                        // Display the quote itself
                        $("#quote_source").text(chosenQuote[1]);                        // Display the source of the quote as listed in QfMZ
};

pageload = () => { 
        generateQuote(0, 426)
}

window.onload = pageload;
