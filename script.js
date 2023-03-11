/*
    getRandom works by returning the results of the fetch command.

    - Note that "return" is set before calling the fetch.  This is what actually returns the results of the fetch command.  You will see in the second .then() a "return" as well.  This is what returns the data from the fetch() method. Gotta have that because fetch() is its own method.

    I'm using an async function for this so that I can call "await".  This will allows the function to wait until the fetch method is finished before returning the data.

    I was having issues because I was calling the console.log() outside of the functions. If I just did console.log(getRandom()) everything would have been fine.  Lesson learned.  I was making things more complicated than they needed to be.

    Noted in the function that we could probably work without actually returning any data and just use the one function.
*/

async function getRandom() {
    return await fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        // if we wanted to, we could put in stuff like "...queryselector().innerText = responseJson.content" here to update the page and just call the getRandom() function with the onclick listener.  Then we wouldn't have to write a new function.
        // we'd be able to get rid of the "return await" part of the funciton before the fetch() method if that was the case.  Honestly wouldn't have to be an async function then either.
        // ^ I picked this up by rewatching the live session Shadeira did with the weather api.
        return responseJson;
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


// I'll leave this here for now.  I might still be able to use it for getting a quote of the day thing going.
const date = new Date();
console.log(date);