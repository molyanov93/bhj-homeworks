let rotatorCases = document.querySelectorAll('.rotator__case');

    rotatorCases.forEach(el => {
        console.log(el.getAttribute('data-speed'));
        setInterval(() => {
            el.classList.toggle('rotator__case_active');
        }, el.getAttribute('data-speed'))
    })
    
 


