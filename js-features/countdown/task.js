let time = document.querySelector('#timer');
let timeNumber = parseInt(time.textContent);

const timer = () => {
	if (timeNumber > 0) {
		timeNumber = parseInt(time.textContent) - 1;
		time.textContent = timeNumber;
		return timeNumber;
	} else {
		window.alert("Вы победили в конкурсе!");
	}
}

const start = () => {
	let startTimer;
	if (timeNumber > 0) {
		startTimer = setInterval(timer, 1000);
	} else {
		clearInterval(startTimer);
		return;
	}
}

start();