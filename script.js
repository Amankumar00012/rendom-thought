let quote = document.getElementById("quot");
let author = document.getElementById("author");
let button = document.getElementById("btn");
url = "https://api.quotable.io/random";

let getQuote =()=>{
  fetch(url)
  .then(data => data.json())
  // .then(item=> console.log(item));
  .then(item =>{
  	 console.log(item.content);
  	 console.log(item.author);
  	 quote.innerText = item.content;
  	 author.innerText = item.author;
  });
}
// getquote();
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);