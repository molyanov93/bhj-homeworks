let link = document.querySelectorAll('.font-size');
let book = document.querySelector('.book__content');
let size;

link.forEach(value => {
	value.addEventListener('click', selectLink)
})

function selectLink(event) {
	link.forEach(value => {
		value.classList.remove('font-size_active')
	})
	
	this.classList.add('font-size_active');
	size = this.getAttribute('data-size');

	if (size === 'big') {
		book.classList.remove('book_fs-small');
		book.classList.add('book_fs-big');
	} else if (size === 'small') {
		book.classList.remove('book_fs-big');
		book.classList.add('book_fs-small');
	} else {
		book.classList.remove('book_fs-small');
		book.classList.remove('book_fs-big');
	}

	event.preventDefault();
}