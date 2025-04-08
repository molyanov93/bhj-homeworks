let counter = 0;
let clickerCounter = document.querySelector("#clicker__counter");
let clickerCookie = document.querySelector(".clicker__cookie");
document.addEventListener("click", (event) => {
	if (event.target.className === 'clicker__cookie') {
		clickerCounter.textContent = ++counter;
		if (counter % 2 === 0) {
			clickerCookie.style.width = "200px";
		} else {
			clickerCookie.style.width = "400px";
		}
	}
});