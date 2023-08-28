let quotes = "https://api.quotable.io/random";
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

async function getQuotes(url) {
  let response = await fetch(url);
  let quoteData = await response.json();

  quote.innerHTML = quoteData.content;
  author.innerHTML = quoteData.author;
}

getQuotes(quotes);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---By " +
      author.innerHTML,
    "Tweet Window",
    "width=600",
    "height=400"
  );
}
