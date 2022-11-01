const generate = document.querySelector(".generate");
const quote = document.querySelector(".quote");

let randomAdvice = async() => { fetch("https://api.adviceslip.com/advice").then((res) => {
	res.json().then((data) => {
		let newQuote = data.slip.advice;
		quote.innerText = newQuote;
	})
})
.catch((e) => {
	console.log(e)
})
}

generate.addEventListener("click", randomAdvice);
