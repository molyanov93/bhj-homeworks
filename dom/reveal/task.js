let reveal = document.querySelector('.reveal');
let reveals = document.querySelectorAll('.reveal');
let body = document.querySelector('body');

function isVisible(el){
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < 0 ){
        return false;
    }

    if(top > window.innerHeight){
    return false;
}
return true;

}

reveals.forEach(reveal => {

window.addEventListener('scroll', () => {
    if (isVisible(reveal)) {
        reveal.classList.add('reveal_active');
    } else {
        reveal.classList.remove('reveal_active');
    }
});
})