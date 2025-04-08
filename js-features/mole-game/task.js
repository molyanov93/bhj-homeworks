let getHoleGame = document.querySelector('.hole-game');
let getDead = document.querySelector('#dead');
let getLost = document.querySelector('#lost');

counterDead = getDead.textContent;
let counterLost = getLost.textContent;

getHoleGame.addEventListener('click', function(event) {

	if (event.target && event.target.classList.contains('hole_has-mole')) {
		getDead.textContent = ++counterDead;
		if (counterDead == 2) {
			counterDead = 0;
			counterLost = 0;
			getDead.textContent = 0;
			getLost.textContent = 0;
			window.alert("Вы выиграли");
		}
	} else {
		getLost.textContent = ++counterLost;
		if (counterLost == 5) {
			counterDead = 0;
			counterLost = 0;
			getDead.textContent = 0;
			getLost.textContent = 0;
			window.alert("Вы проиграли");
		}
	}
})