let rotatorElements = document.querySelectorAll('.rotator__case');
let firstElem = document.querySelector('.rotator').firstElementChild;
let nextElem;

let rotatorElemActive = document.querySelector('.rotator__case_active');

setInterval(() => {
	rotatorElemActive.classList.remove('rotator__case_active');

	if (rotatorElemActive.nextElementSibling) {
		nextElem = rotatorElemActive.nextElementSibling;

		rotatorElemActive.classList.remove('rotator__case_active');
		rotatorElemActive = nextElem;
		rotatorElemActive.classList.add('rotator__case_active');
	} else {
		rotatorElemActive = firstElem;
		rotatorElemActive.classList.add('rotator__case_active');
	}
}, 1000);