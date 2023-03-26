/*
    getRandom works by returning the results of the fetch command.

    - Note that "return" is set before calling the fetch.  This is what actually returns the results of the fetch command.  You will see in the second .then() a "return" as well.  This is what returns the data from the fetch() method. Gotta have that because fetch() is its own method.

    I'm using an async function for this so that I can call "await".  This will allows the function to wait until the fetch method is finished before returning the data.

    I was having issues because I was calling the console.log() outside of the functions. If I just did console.log(getRandom()) everything would have been fine.  Lesson learned.  I was making things more complicated than they needed to be.

    Noted in the function that we could probably work without actually returning any data and just use the one function.
*/

const quoteLabel = document.getElementById("quote-label");
const quoteDiv = document.getElementById("quote");
const authDiv = document.getElementById("author");

async function getRandom() {
    return await fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        quoteLabel.innerText = `Random Quote`;
        quoteDiv.innerText = responseJson.content;
        authDiv = responseJson.author;
    });
}

// Wrote this just to check that the getRandom() function was working properly.  Probably won't need it.
/*
async function checkQuoteData() {
    const quoteObj = await getRandom();
    const quoteText = quoteObj.content;
    const quoteAuthor = quoteObj.author;
    console.log(quoteText + " - " + quoteAuthor)
}

checkQuoteData()
*/


function getDailyQuote() {
    const date = new Date();
    const dateAsNum = date.getTime();

    // URL that will fetch the daily quote
    let url = "https://quotable.io/quotes?limit=1&page="

    // Converts date from milliseconds to days.  Math.trunc() removes all decimals.
    let day = Math.trunc(dateAsNum / 86400000)

    // There are 2042 quotes in the API so this loop ensures the day variable does not exceed the number of quotes.
    while (day > 2042) {
        day = day - 2042;
    }

    // Adds the day to the end of the URL to give it the page number.
    url = url + day;

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {return responseJson.results[0]})
    .then((quote) => {
        quoteLabel.innerText = `Quote of the Day`;
        quoteDiv.innerText = quote.content;
        authDiv.innerText = quote.author;
})
}

// This call will have to stay in so that the page opens with a daily quote already there.
getDailyQuote();