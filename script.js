// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const api_url = "https://api.quotable.io/random";

// async function getquote(url) {
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data);
//     quote.innerHTML = data.content;
//     author.innerHTML = data.author;
// }

// getquote(api_url);

// function tweet() {
//     const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote.innerHTML) +
//          " ---- " + encodeURIComponent(author.innerHTML);
//     window.open(tweetUrl, "TweetWindow", "width=600,height=300");
// }
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url);

function tweet() {
    const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote.innerHTML) +
         " ---- " + encodeURIComponent(author.innerHTML);
    window.open(tweetUrl, "TweetWindow", "width=600,height=300");
}









// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const api_url = "https://api.quotable.io/random";

// async function getquote(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         var data = await response.json();
//         console.log(data);

//         if (quote && author) {  // Ensure elements are available
//             quote.innerHTML = data.content;
//             author.innerHTML = `- ${data.author}`;  // Add a dash for the author
//         } else {
//             console.error("HTML elements for quote and author not found.");
//         }
//     } catch (error) {
//         console.error("Failed to fetch the quote: ", error);
//         quote.innerHTML = "Failed to load quote. Please try again.";
//         author.innerHTML = "";
//     }
// }

// getquote(api_url);

// function tweet() {
//     const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote.innerHTML) +
//          " ---- " + encodeURIComponent(author.innerHTML);
//     window.open(tweetUrl, "TweetWindow", "width=600,height=300");
// }

