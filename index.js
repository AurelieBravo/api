// ***************************nouvelle citation******************************
const quote = document.getElementById("quote");
const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content;
    });

  fetch("https://picsum.photos/1600/1000")
    .then((response) => response)
    .then((data) => {
      console.log(data);
      pic.style.backgroundImage = "url(" + data.url + ")";
    });
};
quote.addEventListener("click", () => getQuote());
getQuote();
