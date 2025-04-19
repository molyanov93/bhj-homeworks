const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownLinks.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        dropdownValue.textContent = target.textContent;
        dropdownList.classList.remove('dropdown__list_active')
    })
})