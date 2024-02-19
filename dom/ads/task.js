let rotator = Array.from(document.querySelectorAll('.rotator__case'));

const interval = setInterval (() => {
    let index = rotator.indexOf(document.querySelector('.rotator__case_active'));
    
    rotator[index].classList.remove('rotator__case_active');
    index = index + 1;

    if (index > rotator.length - 1) {
        index = 0;
    }
    
    rotator[index].classList.add('rotator__case_active');
}, 1000)